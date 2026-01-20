import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import historyRoutes from "./routes/history.routes.js";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/ai", aiRoutes);


app.get("/health", (_, res) => res.json({ status: "OK" }));

export default app;
