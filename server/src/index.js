import "dotenv/config";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import {
  connectPrisma,
  disconnectPrisma,
  prisma,
} from "./lib/prisma.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/errorHandler.js";

const app = express();

const rawAllowedOrigins = process.env.CORS_ORIGIN?.split(",").map((origin) => origin.trim()).filter(Boolean) ?? [];
let corsOrigin;
if (rawAllowedOrigins.length) {
  corsOrigin = rawAllowedOrigins;
} else if (process.env.NODE_ENV === "production") {
  throw new Error("CORS_ORIGIN must be set in production to a list of allowed origins.");
} else {
  corsOrigin = ["http://localhost:3000"];
}
const corsOptions = {
  origin: corsOrigin,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/health", async (req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return res.json({ status: "ok" });
  } catch (error) {
    return next(error);
  }
});

app.use("/api/auth", authRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const port = Number.parseInt(process.env.PORT || "4000", 10);

async function startServer() {
  try {
    await connectPrisma();
    const server = app.listen(port, () => {
      console.log(`🚀 Server listening on port ${port}`);
    });

    const shutdown = async (signal) => {
      console.log(`Received ${signal}. Closing server...`);
      // Set a timeout to force exit after 10 seconds
      const FORCE_EXIT_TIMEOUT = 10000;
      const forceExitTimer = setTimeout(() => {
        console.error("Shutdown did not complete in time. Forcing exit.");
        process.exit(1);
      }, FORCE_EXIT_TIMEOUT);
      try {
        await disconnectPrisma();
        server.close(() => {
          clearTimeout(forceExitTimer);
          console.log("Server closed. Goodbye!");
          process.exit(0);
        });
      } catch (err) {
        clearTimeout(forceExitTimer);
        console.error("Error during shutdown:", err);
        process.exit(1);
      }
    };

    process.on("SIGINT", () => {
      void shutdown("SIGINT");
    });
    process.on("SIGTERM", () => {
      void shutdown("SIGTERM");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
