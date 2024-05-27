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
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector(".tech-footer").offsetTop;
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
        {showNavbar && <Header />}
      </div>
      <div className="techpage">
        <div className="hero">
          <Canvas />
          <div className="content" id="techcontent">
            <h4 id="home_header">BitByBit Solutions</h4>
            <p id="home_p">Welcome to BitbyBit Solutions, where we tackle your tech troubles
                        one byte at a time! Whether it's fixing bugs or building empires, 
                       we have got your back. Let's turn your IT nightmares into fairy tales,
                       bit by bit! Dive in and join the tech-savvy fun ride! .</p>

                {/* <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
        sequence={[
          'Welcome to BitbyBit Solutions, where we tackle your tech troubles one byte at a time! Whether its fixing bugs or building empires, we have got your back. Lets turn your IT nightmares into fairy tales,bit by bit! Dive in and join the tech-savvy fun ride!' ,
          300000,
          '',
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 40 }}
        omitDeletionAnimation={true}
        style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
        repeat={Infinity}
      />        */}
            
          </div>
          {/* <h1>From the cloud to customers, we bring all the answers</h1> */}
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

      <div className="third-section">
        <div className="row">
          <h2>Related Services</h2>
          <div className="icon-card__container small-12">
            <div className="small-12 medium-4 columns icon-card icon-card--large">
              <div className="card-content">
                <div className="icon-border-bottom">
                  <img src={Image1} alt=""></img>
                  <div className="icon-card__description">
                    <h4 className="icon-card__title icon-card__title--expanded">
                      Mobile Applications Development
                    </h4>
                    <p className="small text-center">
                      For business and consumer apps that work across apple and
                      android devices and consume services from the cloud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="small-12 medium-4 columns icon-card icon-card--large">
              <div className="card-content-blue">
                <div className="icon-border-bottom">
                  <img
                    src={webdevelopment}
                    alt=""
                    style={{ marginBottom: "40px" }}
                  ></img>
                  <div className="icon-card__description">
                    <h4 className="icon-card__title icon-card__title--expanded">
                      Web Development
                    </h4>
                    <p className="small text-center">
                      Developing robust & asthetically pleasing web-apps that
                      work as good as they look.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="small-12 medium-4 columns icon-card icon-card--large">
              <div className="card-content">
                <div className="icon-border-bottom">
                  <img src={Image2} alt=""></img>
                  <div className="icon-card__description">
                    <h4 className="icon-card__title icon-card__title--expanded">
                      UI & UX Design & Development
                    </h4>
                    <p className="small text-center">
                      Designing attractive & equally functional UI/UX using
                      latest frameworks that lights up the eyes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
