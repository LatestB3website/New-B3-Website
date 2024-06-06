// import React, { useState } from "react";
// import { Dropdown1, Dropdown2 } from "./Dropdown";
// import B3logof from "../../assets/images/B3logof.png";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   Redirect,
// } from "react-router-dom";
// import "./header.scss";
// import { } from "react-router";

// function Header() {
//   const [click, setClick] = useState(false);
//   const [dropdown1, setDropdown1] = useState(false);
//   const [dropdown2, setDropdown2] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter1 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(true);
//     }
//   };

//   const onMouseLeave1 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(false);
//     }
//   };
//   const onMouseEnter2 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown2(false);
//     } else {
//       setDropdown2(true);
//     }
//   };

//   const onMouseLeave2 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown2(false);
//     } else {
//       setDropdown2(false);
//     }
//   };

//   return (
//     <>
//       <nav className="header-navbar">
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//           BitByBit Solutions
//           {/* <img src={B3logof} alt="b3logo" height="70px" width="70px"></img> */}
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter1}
//             onMouseLeave={onMouseLeave1}
//           >
//             <Link
//               to="/technology"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               Technology <i class="fas fa-caret-down" />
//             </Link>
//             {dropdown1 && <Dropdown1 />}
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter2}
//             onMouseLeave={onMouseLeave2}
//           >
//             <Link
//               to="/recruitment"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               Recruitment <i class="fas fa-caret-down" />
//             </Link>
//             {dropdown2 && <Dropdown2 />}
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
//               Contact
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
//               About Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
//               Career
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <style jsx>{`
//         .nav-links {
//           position: relative;
//           display: inline-block;
//         }
//         .nav-links:after {
//           content: "";
//           position: absolute;
//           width: 100%;
//           transform: scaleX(0);
//           height: 3px;
//           bottom: 0;
//           left: 0;
//           background-color: blue;
//           transform-origin: bottom right;
//           transition: transform 250ms ease-in-out;
//         }
//         .nav-links:hover:after {
//           transform: scaleX(1);
//           transform-origin: bottom left;
//         }
//       `}</style>
//     </>
//   );
// }


// export default Header;

// import React, { useState, useEffect } from "react";
// import { Dropdown1, Dropdown2 } from "./Dropdown";
// import B3logof from "../../assets/images/B3logof.png";
// import { Link } from "react-router-dom";
// import "./header.scss";

// function Header() {
//   const [click, setClick] = useState(false);
//   const [dropdown1, setDropdown1] = useState(false);
//   const [dropdown2, setDropdown2] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter1 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(true);
//     }
//   };

//   const onMouseLeave1 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(false);
//     }
//   };

//   const onMouseEnter2 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown2(false);
//     } else {
//       setDropdown2(true);
//     }
//   };

//   const onMouseLeave2 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown2(false);
//     } else {
//       setDropdown2(false);
//     }
//   };

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY < lastScrollY || currentScrollY === 0) {
//       setShowNavbar(true); // Show navbar when scrolling up or at the top
//     } else {
//       setShowNavbar(false); // Hide navbar when scrolling down
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <>
//       <nav className={`header-navbar ${showNavbar ? "show" : "hide"}`}>
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//           BitByBit Solutions
//           {/* <img src={B3logof} alt="b3logo" height="70px" width="70px"></img> */}
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter1}
//             onMouseLeave={onMouseLeave1}
//           >
//             <Link
//               to="/technology"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               Technology <i className="fas fa-caret-down" />
//             </Link>
//             {dropdown1 && <Dropdown1 />}
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter2}
//             onMouseLeave={onMouseLeave2}
//           >
//             <Link
//               to="/recruitment"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               Recruitment <i className="fas fa-caret-down" />
//             </Link>
//             {dropdown2 && <Dropdown2 />}
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
//               Contact
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
//               About Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
//               Career
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <style jsx>{`
//         .nav-links {
//           position: relative;
//           display: inline-block;
//         }
//         .nav-links:after {
//           content: "";
//           position: absolute;
//           width: 100%;
//           transform: scaleX(0);
//           height: 3px;
//           bottom: 0;
//           left: 0;
//           background-color: blue;
//           transform-origin: bottom right;
//           transition: transform 250ms ease-in-out;
//         }
//         .nav-links:hover:after {
//           transform: scaleX(1);
//           transform-origin: bottom left;
//         }
//         .header-navbar {
//           transition: top 0.3s;
//           position: fixed;
//           width: 100%;
//           top: 0;
//           z-index: 10;
//         }
//         .header-navbar.hide {
//           top: -100px; /* Adjust this value based on your navbar height */
//         }
//         .header-navbar.show {
//           top: 0;
//         }
//       `}</style>
//     </>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Dropdown1, Dropdown2 } from "./Dropdown";
import B3logof from "../../assets/images/B3logof.png";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

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

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY || currentScrollY === 0) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(currentScrollY);
  };

 
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* <nav className={`header-navbar ${showNavbar ? "show" : "hide"}`}> */}
      <nav className={`header-navbar ${showNavbar ? "show" : "hide"}`} style={{ zIndex: 100 }}>



        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          BitByBit Solutions
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
              Technology <i className="fas fa-caret-down" />
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
              Recruitment <i className="fas fa-caret-down" />
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
      <style jsx>{`
        .nav-links {
          position: relative;
          display: inline-block;
        }
        .nav-links:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: blue;
          transform-origin: bottom right;
          transition: transform 250ms ease-in-out;
        }
        .nav-links:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .header-navbar {
          transition: top 0.3s;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 10;
        }
        .header-navbar.hide {
          top: -100px; /* Adjust this value based on your navbar height */
        }
        .header-navbar.show {
          top: 0;
        }
      `}</style>
    </>
  );
}

export default Header;



