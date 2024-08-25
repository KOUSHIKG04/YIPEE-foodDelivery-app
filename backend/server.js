import express from "express";
import cors from "cors";
import { connectDB } from "./configuration/db.js";
import foodRouter from "./routes/foodRoute.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

connectDB();

app.use("/api/v1/food", foodRouter);
app.use("/images", express.static("upload"));

app.get("/", (req, res) => {
  res.send("API WORKING...");
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
