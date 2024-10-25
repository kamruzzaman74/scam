import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "#f4f4f4" }}>
      <Link to="/">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin-login">Admin Login</Link>
      <Link to="/dashboard">Admin Dashboard</Link>
    </nav>
  );
}

export default Navbar;
