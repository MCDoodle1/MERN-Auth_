import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "../backend/routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5999;

app.use(express.json()); // Allows parsing of incoming requests under req.body
app.use(cookieParser()); // Allows parsing of incoming cookies

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port", PORT);
});
