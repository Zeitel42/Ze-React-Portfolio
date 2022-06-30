import React from "react";
// import { router } from "react-router-dom";
import "../../assets/css/style.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/About" className="navActive">
            About
          </a>
        </li>
        <li>
          <a href="/Project" className="navActive">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/Contact" className="navActive">
            Contact
          </a>
        </li>
        <li>
          <a href="/Resume" className="navActive">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
