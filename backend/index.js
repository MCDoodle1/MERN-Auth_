import { User } from "./models/user.model.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "../backend/routes/auth.route.js";
import { connectDB } from "./db/connectDB.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // Allows parsing of incoming requests under req.body
app.use(cookieParser()); // Allows parsing of incoming cookies

// Function to clear user data once when server starts
const clearUserData = async () => {
  try {
    await User.deleteMany({});
    console.log("All user data cleared from database.");
  } catch (err) {
    console.error("Error clearing user data: ", err);
  }
};

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Connect to DB and clear data after the connection is successful
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Connected to database.");
    await clearUserData(); // Clear user data after DB connection
    console.log("Server is running on port", PORT);
  } catch (err) {
    console.error("Error during startup:", err);
  }
});
