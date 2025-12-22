import { useEffect, useState } from "react";
import API from "../services/movieApi";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const res = search
        ? await API.get(`/search?title=${search}`)
        : await API.get("/");
      setMovies(res.data);
    };
    fetchMovies();
  }, [search]);

  return (
    <div style={{ padding: 30 }}>
      <input
        placeholder="🔍 Search movie by title..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 10,
          width: 300,
          marginBottom: 30,
          borderRadius: 5,
          border: "1px solid #ccc"
        }}
      />

      {movies.length === 0 ? (
        <h3>No movies found 🎥</h3>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 25
        }}>
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
