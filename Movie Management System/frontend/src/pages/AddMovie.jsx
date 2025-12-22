import { useState } from "react";
import API from "../services/movieApi";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    genre: "",
    releaseYear: ""
  });

  const [poster, setPoster] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setPoster(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!poster) {
      alert("Please select a movie poster");
      return;
    }

    const formData = new FormData();
    Object.keys(movie).forEach(key =>
      formData.append(key, movie[key])
    );
    formData.append("poster", poster);

    setLoading(true);
    await API.post("/", formData);
    setLoading(false);

    navigate("/");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1 style={{ marginBottom: 5 }}>🎬 Add New Movie</h1>
        <p style={{ color: "#777", marginBottom: 25 }}>
          Fill movie details below
        </p>

        <form onSubmit={handleSubmit} style={form}>
          <div style={row}>
            <div style={field}>
              <label>Movie Title</label>
              <input
                name="title"
                placeholder="Enter movie title"
                required
                onChange={handleChange}
              />
            </div>

            <div style={field}>
              <label>Genre</label>
              <input
                name="genre"
                placeholder="Action / Drama / Comedy"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={row}>
            <div style={field}>
              <label>Release Year</label>
              <input
                name="releaseYear"
                type="number"
                placeholder="2024"
                required
                onChange={handleChange}
              />
            </div>

            <div style={field}>
              <label>Movie Poster</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>

          <div style={field}>
            <label>Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write movie description..."
              required
              onChange={handleChange}
            />
          </div>

          {preview && (
            <div style={{ marginTop: 20 }}>
              <p style={{ marginBottom: 8 }}>Poster Preview</p>
              <img
                src={preview}
                alt="preview"
                style={previewImg}
              />
            </div>
          )}

          <button style={btn}>
            {loading ? "Saving..." : "Add Movie"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const page = {
  background: "#f4f6f8",
  minHeight: "100vh",
  padding: "40px 0"
};

const card = {
  background: "#fff",
  width: 600,
  margin: "auto",
  padding: 30,
  borderRadius: 12,
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: 18
};

const row = {
  display: "flex",
  gap: 15
};

const field = {
  display: "flex",
  flexDirection: "column",
  flex: 1
};

const previewImg = {
  width: 200,
  height: 280,
  objectFit: "cover",
  borderRadius: 8,
  boxShadow: "0 6px 15px rgba(0,0,0,0.15)"
};

const btn = {
  marginTop: 25,
  background: "#ff4d4d",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: 8,
  fontSize: 16,
  fontWeight: "bold"
};

export default AddMovie;
