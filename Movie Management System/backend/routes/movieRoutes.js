import express from "express";
import upload from "../middleware/upload.js";
import {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", upload.single("poster"), addMovie);
router.get("/", getAllMovies);
router.get("/search", searchMovies);
router.get("/:id", getMovieById);
router.put("/:id", upload.single("poster"), updateMovie);
router.delete("/:id", deleteMovie);

export default router;
