import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <a href="#">Mainpage</a>
        <a href="#">Second</a>
      </div>
    </div>
  );
}
