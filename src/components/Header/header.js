import React, { useState } from "react";
import { Dropdown1, Dropdown2 } from "./Dropdown";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
      <nav className="flex w-[80%] fixed top-10 inset-x-0 mx-auto z-[5000] navbar1 h-[5rem] bg-blue-500 rounded-full pr-2 pl-8 items-center justify-between space-x-4">
        <Link
          to="/"
          className="text-white ml-5 cursor-pointer font-montserrat no-underline text-2xl transform hover:scale-105 transition-transform duration-300"
          onClick={closeMobileMenu}
        >
          BitByBit Solutions
        </Link>
        <div
          className="block md:hidden absolute top-0 right-0 transform translate-y-1/2 -translate-x-full text-white text-2xl cursor-pointer"
          onClick={handleClick}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul
          className={`text-white pt-3 md:flex md:items-center md:justify-end md:w-auto md:mr-8 transition-all duration-300 ${
            click
              ? "flex flex-col w-full h-screen bg-blue-900 absolute top-20 left-0 opacity-100 transition duration-500 ease-in-out z-100"
              : "hidden"
          }`}
        >
          <li className="nav-item mx-4">
            <Link
              to="/"
              className="nav-link from-left p-1"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item mx-4 py-5"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to="/technology"
              className="nav-link p-1 flex items-center from-left"
              onClick={closeMobileMenu}
            >
              Technology{" "}
              <i className="fas fa-caret-down ml-2 transition-transform duration-300 transform hover:rotate-180" />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li
            className="nav-item mx-4 py-5"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to="/recruitment"
              className="nav-link p-1 flex items-center from-left"
              onClick={closeMobileMenu}
            >
              Recruitment{" "}
              <i className="fas fa-caret-down ml-2 transition-transform duration-300 transform hover:rotate-180" />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className="nav-item mx-4">
            <Link
              to="/contact"
              className="nav-link p-1 from-left"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link
              to="/aboutus"
              className="nav-link p-1 from-left"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link
              to="/careers"
              className="nav-link  p-1 from-left"
              onClick={closeMobileMenu}
            >
              Career
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: gray;
          transform-origin: bottom right;
          transition: transform 250ms ease-in-out;
        }
        .nav-link:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </>
  );
}

export default Header;
