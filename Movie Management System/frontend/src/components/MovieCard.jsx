import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{
      width: 220,
      background: "#fff",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.2s"
    }}>
      <img
        src={`http://localhost:5000/uploads/posters/${movie.poster}`}
        alt={movie.title}
        style={{ width: "100%", height: 300, objectFit: "cover" }}
      />

      <div style={{ padding: 12 }}>
        <h4>{movie.title}</h4>
        <p style={{ fontSize: 13, color: "#555" }}>
          {movie.genre} • {movie.releaseYear}
        </p>

        <Link
          to={`/movie/${movie._id}`}
          style={{
            display: "inline-block",
            marginTop: 8,
            color: "#ff4d4d",
            fontWeight: "bold"
          }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
