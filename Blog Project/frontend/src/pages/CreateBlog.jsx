import { useState } from "react";
import api from "../api/axios";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("content", content);
    form.append("image", image);

    await api.post("/blogs", form);
    alert("Blog Created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button>Create</button>
    </form>
  );
}
