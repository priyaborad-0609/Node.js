import Movie from "../models/Movie.js";
import fs from "fs";
import path from "path";

// ADD MOVIE
export const addMovie = async (req, res) => {
  try {
    const { title, description, genre, releaseYear } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Poster image is required" });
    }

    const movie = await Movie.create({
      title,
      description,
      genre,
      releaseYear,
      poster: req.file.filename
    });

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL MOVIES
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE MOVIE
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE MOVIE
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    if (req.file) {
      const oldPath = path.join("uploads/posters", movie.poster);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      movie.poster = req.file.filename;
    }

    movie.title = req.body.title || movie.title;
    movie.description = req.body.description || movie.description;
    movie.genre = req.body.genre || movie.genre;
    movie.releaseYear = req.body.releaseYear || movie.releaseYear;

    await movie.save();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE MOVIE
export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const filePath = path.join("uploads/posters", movie.poster);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await movie.deleteOne();
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH MOVIE
export const searchMovies = async (req, res) => {
  try {
    const { title } = req.query;

    const movies = await Movie.find({
      title: { $regex: title, $options: "i" }
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
