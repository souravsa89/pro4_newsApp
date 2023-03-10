import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          NewsReact
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/general" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/business"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/entertainment"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/science" className="nav-links" onClick={closeMobileMenu}>
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/technology"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sports" className="nav-links" onClick={closeMobileMenu}>
              Sports
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
