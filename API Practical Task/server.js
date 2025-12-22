import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/Book.routes.js";
import logger from "./middleware/logger.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(logger);

app.use("/books", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
