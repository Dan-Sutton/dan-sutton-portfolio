import React from "react";
import "./navbar.css";

function Navbar(props) {
  return (
    <nav className="nav">
      <a className="site-title">Dan Sutton</a>

      <ul>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
