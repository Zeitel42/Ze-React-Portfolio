import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../assets/css/style.css";

function Nav() {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <ul>
        <NavActive to="/About">About</NavActive>
        <NavActive to="/Project">Portfolio</NavActive>
        <NavActive to="/Contact">Contact</NavActive>
        <NavActive to="/Resume">Resume</NavActive>
      </ul>
    </nav>
  );
}

function NavActive({ to, children, ...props }) {
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
export default Nav;
