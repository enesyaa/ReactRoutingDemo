import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}
