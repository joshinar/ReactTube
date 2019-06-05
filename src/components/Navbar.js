import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg mb-3"
      style={{ backgroundColor: "#FF0000" }}
    >
      <div className="container">
        <i
          className="fab fa-youtube-square fa-2x mx-2"
          style={{ color: "#fff" }}
        />
        <a href="/" className="navbar-brand mr-auto">
          React Tube
        </a>
      </div>
    </nav>
  );
}
