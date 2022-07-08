import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../assets/css/style.css";

function Nav() {
  const path = window.location.pathname;
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex mx-auto ">
        <ul className="container flex flex-wrap items-center justify-around text-gray-800">
          <NavActive to="/About">About</NavActive>
          <NavActive to="/Project">Portfolio</NavActive>
          <NavActive to="/Contact">Contact</NavActive>
          <NavActive to="/Resume">Resume</NavActive>
        </ul>
      </div>
    </nav>
  );
}

function NavActive({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "bg-gray-700 text-white rounded p-0.5" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Nav;
