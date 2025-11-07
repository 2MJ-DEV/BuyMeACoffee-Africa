import express from "express";
import { updateProfile, updatePaymentSettings } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.patch("/profile", authenticate, updateProfile);
router.patch("/payment", authenticate, updatePaymentSettings);

export default router;
