import React, { useState } from "react";
import { Dropdown1, Dropdown2 } from "./Dropdown";
import B3logof from "../../assets/images/B3logof.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import "./header.scss";
import {} from "react-router";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <>
      <nav className="header-navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          BitByBit Solutions
          {/* <img src={B3logof} alt="b3logo" height="70px" width="70px"></img> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to="/technology"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Technology <i class="fas fa-caret-down" />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to="/recruitment"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Recruitment <i class="fas fa-caret-down" />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
              Career
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
