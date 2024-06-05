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
import technologyhomeimg from "../../../assets/images/technologyhomeimg.png"
import letstalk from "../../../assets/images/letstakeicon1.png"
import contact from "../../../assets/images/contact.png"
import dimond from "../../../assets/images/dimond1.png"
import star from "../../../assets/images/star.png"
import bank from "../../../assets/images/bankingicon.png"
import ecom from "../../../assets/images/egovandecomicon.png"
import healthcare from "../../../assets/images/healthcare.png"
import Hospitality from "../../../assets/images/hospitality.png"
import Aos from "aos";
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
    <div className="techHomepageMain ">
      <div className={`header-container ${showNavbar ? "" : "header-hidden"}`}>
        {showNavbar && <Header />}
      </div>
      <div className="techpage mt-4 ">
        <div className=" flex w-full pl-10 ">
          <div className=" w-3/6 bg-white flex flex-col justify-center items-start gap-2 ml-8">
            <h1 class='home_h1'>Your software <br /> development company!</h1>
            <p class='home_p'>At BitByBit Solutions, we offer high-quality development services designed to meet your unique needs. Our expert developers specialize in creating reliable and scalable software solutions, from custom websites and mobile apps to enterprise systems. We use the latest technologies to deliver projects on time , ensuring a smooth and satisfying user experience. Partner with us to bring your ideas to life and stay ahead in the digital world. </p>
            <div class='lets_talk'>
              <img src={letstalk} width='25px' />
              <a href="#">Let’s talk</a>
            </div>
          </div>
          <div className=" w-3/6 flex justify-center items-center">
            <img src={technologyhomeimg} style={{}} width='90%' />
          </div>
        </div>

        <div class='multi_box'>
          <div className="boxes w-[12%]  py-5" >
            <div className=" flex flex-row justify-around items-center">
              <p class='box_p1'>+50</p>
              <img src={contact} className=" h-6" />
            </div>
            <p className="box_p2 pl-5">EMPLOYEES ON BOARD</p>
          </div>
          {/* ................................................................ */}

          <div className="boxes w-[12%]  py-5" >
            <div className=" flex flex-row justify-around items-center">
              <p class='box_p1'>+6</p>
              <img src={dimond} className=" h-6" />
            </div>
            <p className="box_p2 pl-5">YEARS ON THE MARKET</p>
          </div>
          {/* ................................................................ */}

          <div className="boxes w-[12%]  py-5" >
            <div className=" flex flex-row justify-around items-center">
              <p class='box_p1'>+50</p>
              <img src={contact} className=" h-6" />
            </div>
            <p className="box_p2 pl-5">ACTIVE USERS OF OUR APPS</p>
          </div>
          {/* ................................................................ */}

          <div className="boxes w-[12%]  py-5" >
            <div className=" flex flex-row justify-around items-center">
              <p class='box_p1'>4.7</p>
              <img src={star} className=" h-6" />
            </div>
            <p className="box_p2 pl-5">CLUTCH RATING</p>
          </div>
          {/* ................................................................ */}
        </div>
        {/* ................................ */}
        {/* <div className="hero"> */}
        {/* <Canvas /> */}
        {/* <div class="content" id="techcontent">
            <h4>BitByBit Solutions</h4>
            <p>Development Services with cutting edge technology.</p>
          </div>
          <h1>From the cloud to customers, we bring all the answers</h1>
        </div> */}
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

      {/* <div className="third-section">
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
      </div> */}

      <h1 className='mainh1'> Industries we deal with</h1>
      <span className="for_underline block    -bottom-2 "></span>
      <div className="  flex  w-full h-auto p-10">
        <div className=" flex flex-col   w-auto h-auto ">
          <div className="flex gap-5 justify-center mr-[20%] " data-aos="fade-right"
            data-aos-duration="1500">
            <div className="d1 d11 w-[40%]  m-5 ">
              <h1 className="titleh1 text-center m-3 pl-4">Banking, Financial Services and Insurance (BFSI)</h1>
              <div className="flex h-auto gap-2 ">
                <img src={bank} className="h-11 ml-2" />
                <p >We have extensive experience in developing secure and efficient software solutions for the BFSI sector. Our services include financial transactions management, risk assessment systems, customer relationship management, and regulatory compliance solutions.</p>
              </div>
            </div>

            <div className="d1 d12  w-[40%]   m-5">
              <h1 className="titleh1 text-center  m-3 pl-4">E-Gov & E-Com</h1>
              <div className="flex h-auto gap-3">
                <img src={ecom} className="h-11 ml-1" />
                <p >We offer comprehensive e-Governance and e-Commerce solutions, including ticket booking, recharges, money transfers, Aadhaar enrolments, Amazon orders, insurance purchases, utility bill payments, and more, with features like shopping cart integration, payment gateways, customer management, and data analytics for seamless online transactions.</p>
              </div>
            </div>
          </div>
          {/* ........................................................ */}
          <div className="flex gap-5 justify-end mr-[10%]  " data-aos="fade-left"
            data-aos-duration="1500">
            <div className="d1 d13 w-[35%]  m-5">
              <h1 className="titleh1 text-center m-3 pl-4">HealthCare</h1>
              <div className="flex h-auto gap-3">
                <img src={healthcare} className="h-11 ml-1" />
                <p >We offer a wide range of healthcare IT solutions including electronic health records (EHR) systems, appointment scheduling software, telemedicine platforms, and healthcare data analytics. Our solutions are designed to improve patient care and streamline healthcare operations. </p>

              </div>
            </div>

            <div className="d1 d14 w-[35%]   m-5">
              <h1 className="titleh1 text-center m-3 pl-4">Hospitality</h1>
              <div className="flex h-auto gap-3">
                <img src={Hospitality} className="h-11 ml-1" />
                <p >Our hospitality software solutions include property management systems (PMS), booking and reservation systems, CRM software, and POS systems to enhance customer service and optimize operations. We use our industry expertise to provide tailored solutions and stay updated on the latest trends and technologies to keep our clients ahead of the curve.</p>
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
