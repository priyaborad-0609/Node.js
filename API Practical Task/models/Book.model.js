import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    category: String,
    brand: String,
    price: Number,
    rating: Number,
    description: String,
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
