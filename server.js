import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";      
import userRoutes from "./routes/userRoutes.js"; 
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/movies", movieRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Moodifyyyyyyy API is running!" });
});

connectDB();
console.log("SERVER INSTANCE:", process.pid);
console.log("SERVER INSTANCE ID:", Math.random());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});