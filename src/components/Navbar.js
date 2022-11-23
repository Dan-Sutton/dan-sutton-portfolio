import React from "react";
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Dan Sutton
      </Link>

      <ul>
        <CustomLink to="/">About Me</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
