import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <h3>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            listStyle: "none"
          }}
        >
          <li className="logo">LOGO</li>
        </Link>
      </h3>

      <ul className="nav__links">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link
          to="/weather"
          style={{
            textDecoration: "none",
            marginLeft: "20%"
          }}
        >
          <li>Weather</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
