import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./connectDB.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
