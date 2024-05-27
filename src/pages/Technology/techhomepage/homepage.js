import React, { useState, useEffect } from "react";
import Canvas from "../../../shared/Canvas";
import "./homepage.scss";
import Footer from "../../../components/Footer/footer";
import Flipcard from "../../../components/CardComponent/FlipCard";
import Header from "../../../components/Header/header";
import ExpandableCard from "../../../components/CardComponent/ExpandableCard";
import SplitCard from "../../../components/CardComponent/SplitCard";
import Image1 from "../../../assets/images/androidios.jpg";
import Image2 from "../../../assets/images/ux.png";
import webdevelopment from "../../../assets/images/webdev.png";

const Homepage = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".tech-footer");
      const footerHeight = footer.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= footerHeight) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="techHomepageMain">
      <div className={`header-container ${showNavbar ? "" : "header-hidden"}`}>
        <Header />
      </div>
      <div className="techpage">
        <div className="hero">
          <Canvas />
          <div className="content" id="techcontent">
            <h4>BitByBit Solutions</h4>
            <p>Development Services with cutting edge technology.</p>
          </div>
          <h1>From the cloud to customers, we bring all the answers</h1>
        </div>
        <div className="secondary-section">
          <div className="label">
            <h1 className="oneliner">
              We <span style={{ color: "#0060b5" }}>design</span> We{" "}
              <span style={{ color: "#0060b5" }}>develop</span> We{" "}
              <span style={{ color: "#0060b5" }}>deliver</span>
            </h1>
          </div>
          <SplitCard />
        </div>
      </div>

      {/* <div className="third-section  ">
        </div>
         */}

      <div className="tech-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
