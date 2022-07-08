import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <div className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <header className="mx-9 text-white pt-1">
        <ul>
          <li>
            <h1 className="text-5xl pb-2">Zac Eitel</h1>
          </li>
          <li>
            <Nav />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
