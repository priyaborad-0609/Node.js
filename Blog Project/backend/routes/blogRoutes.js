import express from "express";
import auth from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
import { createBlog, getBlogs, deleteBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", auth, upload.single("image"), createBlog);
router.delete("/:id", auth, deleteBlog);

export default router;
