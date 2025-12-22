import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../services/movieApi";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.get(`/${id}`).then(res => setMovie(res.data));
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this movie?");
    if (!confirm) return;

    await API.delete(`/${id}`);
    navigate("/");
  };

  if (!movie) return <h2 style={{ padding: 30 }}>Loading...</h2>;

  return (
    <div style={{ padding: 40 }}>
      <div style={{
        display: "flex",
        gap: 40,
        background: "#fff",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
      }}>
        {/* Poster */}
        <img
          src={`http://localhost:5000/uploads/posters/${movie.poster}`}
          alt={movie.title}
          style={{
            width: 280,
            height: 420,
            objectFit: "cover",
            borderRadius: 8
          }}
        />

        {/* Details */}
        <div style={{ flex: 1 }}>
          <h1>{movie.title}</h1>

          <p style={{ color: "#777", marginBottom: 10 }}>
            {movie.genre} • {movie.releaseYear}
          </p>

          <p style={{ lineHeight: 1.6 }}>
            {movie.description}
          </p>

          <div style={{ marginTop: 30 }}>
            <Link to={`/edit/${movie._id}`}>
              <button style={btnStyle("#4caf50")}>Edit</button>
            </Link>

            <button
              onClick={handleDelete}
              style={btnStyle("#f44336", true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const btnStyle = (color, outline = false) => ({
  background: outline ? "transparent" : color,
  color: outline ? color : "#fff",
  border: `2px solid ${color}`,
  padding: "10px 18px",
  marginRight: 10,
  borderRadius: 6,
  fontWeight: "bold"
});

export default MovieDetails;
