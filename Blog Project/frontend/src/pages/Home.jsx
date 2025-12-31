import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then(res => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(b => (
        <div key={b._id}>
          <h3>{b.title}</h3>
          <p>{b.content}</p>
          <img src={`http://localhost:5000/${b.image}`} width="200" />
        </div>
      ))}
    </div>
  );
}
