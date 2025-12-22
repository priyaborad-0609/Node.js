import Book from "../models/Book.model.js";

// GET ALL + FILTER + SORT + PAGINATION
export const getBooks = async (req, res) => {
  try {
    const {
      category,
      brand,
      minPrice,
      maxPrice,
      rating,
      sort,
      page = 1,
      limit = 5,
      search,
    } = req.query;

    let query = {};

    if (category) query.category = category;
    if (brand) query.brand = brand;

    if (rating) query.rating = { $gte: rating };

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }

    if (search) {
      query.bookName = { $regex: search, $options: "i" };
    }

    let sortOption = {};
    if (sort === "price_asc") sortOption.price = 1;
    if (sort === "price_desc") sortOption.price = -1;

    const totalBooks = await Book.countDocuments(query);

    const books = await Book.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    if (books.length === 0) {
      return res.json({ message: "No products found" });
    }

    res.json({
      totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
      currentPage: Number(page),
      books,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.json({ message: "No products found" });
  res.json(book);
};
