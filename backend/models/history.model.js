import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    actionType: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("History", historySchema);
