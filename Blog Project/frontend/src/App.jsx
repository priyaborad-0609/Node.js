import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, background: "#222" }}>
        <Link to="/" style={{ color: "white", marginRight: 10 }}>Home</Link>
        <Link to="/register" style={{ color: "white", marginRight: 10 }}>Register</Link>
        <Link to="/login" style={{ color: "white", marginRight: 10 }}>Login</Link>
        <Link to="/create" style={{ color: "white" }}>Create Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
