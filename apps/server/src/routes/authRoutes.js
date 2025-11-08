import express from "express";
import {
  registerUser,
  loginUser,
  loginWithGitHub,
  loginWithGoogle,
  getCurrentUser,
} from "../controllers/authController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/github", loginWithGitHub);
router.post("/google", loginWithGoogle);
router.get("/me", authenticate, getCurrentUser);

export default router;
