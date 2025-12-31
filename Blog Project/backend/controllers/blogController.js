import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    image: req.file.path,
    author: req.user.id
  });

  res.json(blog);
};

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "name");
  res.json(blogs);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.author.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });

  await blog.deleteOne();
  res.json({ message: "Deleted" });
};
