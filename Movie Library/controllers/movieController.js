import Movie from "../models/movieModel.js";

// Add Movie
export const addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json({
            message: "Movie Added Successfully",
            movie: newMovie,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Movies
export const getMovie = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ movies });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update Movie
export const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Movie Updated Successfully",
            movie: updatedMovie,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Movie
export const deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Movie Deleted Successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
