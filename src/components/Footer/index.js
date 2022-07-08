import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://github.com/Zeitel42" className="px-3">
            Zeitel42
          </a>
          All Rights Reserved.
        </span>

        <div className="flex flex-row">
          <a
            href="https://github.com/Zeitel42"
            target="_blank"
            className="px-3"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/zac-eitel-54709022a/"
            target="_blank"
            className="px-3"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://stackoverflow.com/users/9383363/zeitel42"
            target="_blank"
            className="px-3"
          >
            <FaStackOverflow className="w-6 h-6" />
          </a>
        </div>

        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/About" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/Project" className="mr-4 hover:underline md:mr-6 ">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="mr-4 hover:underline md:mr-6 ">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Resume" className="mr-4 hover:underline md:mr-6 ">
              Resume
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
