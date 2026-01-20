import express from "express";
import { getUserHistory } from "../Controllers/history.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// GET /api/history
router.get("/", protect, getUserHistory);

export default router;
