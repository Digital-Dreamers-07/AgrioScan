import express from "express";
import { cropRecommendation } from "../Controllers/ai.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/crop-recommendation", protect, cropRecommendation);

export default router;