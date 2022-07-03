import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <header className="flex-row px-1 page-header">
      <ul>
        <li>
          <h1>Zac Eitel</h1>
        </li>
        <li>
          <Nav />
        </li>
      </ul>
    </header>
  );
}

export default Header;
