import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{
      background: "#111",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ color: "#fff" }}>🎬 Movie Management System</h2>

      <div>
        <Link to="/" style={{ color: "#fff", marginRight: 20 }}>
          Movies
        </Link>
        <Link to="/add" style={{
          background: "#ff4d4d",
          padding: "8px 14px",
          borderRadius: 5,
          color: "#fff"
        }}>
          + Add Movie
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
