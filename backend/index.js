import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./connectDB.js";
import authRoutes from "../backend/routes/auth.route.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
