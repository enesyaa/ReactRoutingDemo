import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  );
}
