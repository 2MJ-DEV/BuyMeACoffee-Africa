import express from "express";
import { getDonations } from "../controllers/donationController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getDonations);

export default router;
