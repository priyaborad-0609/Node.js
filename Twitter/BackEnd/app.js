import express from "express";
import tweetRoutes from "./routes/tweetRoutes.js";
import logger from "./middleware/logger.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(cors());

// Logger middleware
app.use(logger);

// Routes
app.use("/api/tweets", tweetRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

