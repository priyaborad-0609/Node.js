import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import logger from "./middleware/logger.js";
import movieRoutes from "./routes/movieRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

connectDB();

app.use("/api/movies", movieRoutes);

app.listen(3200, () => {
    console.log("Server started Running...!");
});