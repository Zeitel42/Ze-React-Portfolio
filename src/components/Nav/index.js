import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   currentCategory,
  //   contactSelected,
  //   setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">Home</li>
        <li className="mx-2">Projects</li>
        <li className="mx-2">About</li>
        <li className="mx-2">Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
