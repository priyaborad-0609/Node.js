import { useEffect, useState } from "react";
import API from "../services/movieApi";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    genre: "",
    releaseYear: ""
  });

  const [poster, setPoster] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.get(`/${id}`).then(res => {
      setMovie(res.data);
      setPreview(`http://localhost:5000/uploads/posters/${res.data.poster}`);
    });
  }, [id]);

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

    const formData = new FormData();
    Object.keys(movie).forEach(key =>
      formData.append(key, movie[key])
    );
    if (poster) formData.append("poster", poster);

    setLoading(true);
    await API.put(`/${id}`, formData);
    setLoading(false);

    navigate(`/movie/${id}`);
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1>✏️ Edit Movie</h1>
        <p style={{ color: "#777", marginBottom: 25 }}>
          Update movie information
        </p>

        <form onSubmit={handleSubmit} style={form}>
          <div style={row}>
            <div style={field}>
              <label>Movie Title</label>
              <input name="title" value={movie.title} onChange={handleChange} />
            </div>
            <div style={field}>
              <label>Genre</label>
              <input name="genre" value={movie.genre} onChange={handleChange} />
            </div>
          </div>

          <div style={row}>
            <div style={field}>
              <label>Release Year</label>
              <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} />
            </div>
            <div style={field}>
              <label>Update Poster</label>
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>
          </div>

          <div style={field}>
            <label>Description</label>
            <textarea rows="4" name="description" value={movie.description} onChange={handleChange} />
          </div>

          {preview && <img src={preview} style={previewImg} alt="preview" />}

          <button style={btn}>
            {loading ? "Updating..." : "Update Movie"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;

/* styles same as AddMovie */
const page = { background: "#f4f6f8", minHeight: "100vh", padding: "40px 0" };
const card = { background: "#fff", width: 600, margin: "auto", padding: 30, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" };
const form = { display: "flex", flexDirection: "column", gap: 18 };
const row = { display: "flex", gap: 15 };
const field = { display: "flex", flexDirection: "column", flex: 1 };
const previewImg = { width: 200, marginTop: 15, borderRadius: 8 };
const btn = { marginTop: 25, background: "#ff4d4d", color: "#fff", padding: "12px", border: "none", borderRadius: 8, fontWeight: "bold" };
