import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <h3>
        <li
          className="logo"
          style={{ textdecoration: "none", listStyle: "none" }}
        >
          LOGO
        </li>
      </h3>
      <ul className="nav__links">
        <li>About</li>
        <li>Weather</li>
      </ul>
    </nav>
  );
}

export default Nav;
