import express from "express";
import { addMovie, getMovie, updateMovie, deleteMovie } from "../controllers/movieController.js";

const router = express.Router();

router.post("/", addMovie);
router.get("/", getMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;


