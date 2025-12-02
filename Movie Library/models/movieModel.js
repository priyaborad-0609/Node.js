import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        genre: { type: String },
        releaseYear: { type: Number },
        rating: { type: Number },
        duration: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);