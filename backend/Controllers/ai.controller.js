import { getCropRecommendationFromGemini } from "../services/gemini.service.js";
import History from "../models/history.model.js";

export const cropRecommendation = async (req, res) => {
  try {
    const { soil, location, season } = req.body;

    const recommendation =
      await getCropRecommendationFromGemini(
        `Soil:${soil}, Location:${location}, Season:${season}`
      );

    // 🔴 THIS IS WHERE HISTORY GETS FILLED
    await History.create({
      user: req.user.id,
      actionType: "CROP_RECOMMENDATION",
      data: { soil, location, season }
    });

    res.json({ recommendation });
  } catch (error) {
    res.status(500).json({ message: "AI failed" });
  }
};
