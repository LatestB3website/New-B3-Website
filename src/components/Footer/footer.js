import React from "react";
import Imagelogo from "../../assets/images/B3logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>


const Footer = () => {
  return (
    <div className="pg-footer  ">
      <footer className="footer bg-blue-950 text-white">
        {/* <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        > */}
        {/* <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8
            c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            fill="#fffff2"
          ></path> */}
        {/* </svg> */}
        <div className="footer-content mx-auto max-w-screen-xl px-4 py-10 lg:pt-20 flex">
          <div className="footer-content-column w-full lg:w-1/4 mb-10 lg:mb-0">
            <div className="footer-logo">
              <a className="footer-logo-link" href="/">
                <img src={Imagelogo} alt="Imagelogo" className=" w-24 h-24" />
              </a>
            </div>
            <div className="footer-menu mt-6 ">
              <h2 className="footer-menu-name text-lg font-bold uppercase">
                Get Started
              </h2>
              <ul className="footer-menu-list mt-4 space-y-2 ">
                <li>
                  <a
                    href="/"
                    className="  text-white hover:text-blue-400 text-xl	 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/technology"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="/recruitment"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Recruitment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column w-full lg:w-1/4 mb-10 lg:mb-0">
            <div className="footer-menu">
              <h2 className="footer-menu-name text-lg font-bold uppercase">
                Company
              </h2>
              <ul className="footer-menu-list mt-4 space-y-2">
                <li>
                  <a
                    href="/Contact"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/Careers"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/technology-clients"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Technology Clients
                  </a>
                </li>
                <li>
                  <a
                    href="/recruitment-clients"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Recruitment Clients
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column w-full lg:w-1/4 mb-10 lg:mb-0 ">
            <div className="footer-menu ">
              <h2 className="footer-menu-name text-lg font-bold uppercase">
                Quick Links
              </h2>
              <ul className="footer-menu-list mt-4 space-y-2 p-0">
                <li>
                  <a
                    href="/technology-services"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Technology Services
                  </a>
                </li>
                <li>
                  <a
                    href="/recruitment-services"
                    className="text-white hover:text-blue-400 text-xl	"
                  >
                    Recruitment Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column w-full lg:w-1/4 mb-10 lg:mb-0">
            <div className="footer-call-to-action ">
              <h2 className="footer-call-to-action-title text-lg font-bold uppercase">
                You Call Us
              </h2>
              <p className="footer-call-to-action-link-wrapper mt-2">
                <a
                  href="tel:0124-64XXXX"
                  className="text-white hover:text-blue-400 transition-all delay-100 text-xl	"
                >
                  ( +91) 022 65510355
                </a>
              </p>
            </div>
            <div className="footer-call-to-action mt-6">
              <h2 className="footer-call-to-action-title text-lg font-bold uppercase">
                Address
              </h2>
              <p className="mt-4 text-xl">
                912 | 1st Floor | Building No 9 | Solitaire Corporate Park |
                Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093
              </p>
            </div>
            <div className="social-media flex  mt-10 gap-7">
              <a href="/facebook" className="icon-circle ">
                <i className="iconfb ">
                  <FaFacebook className="text-2xl hover:text-blue-400" />
                </i>
              </a>
              
              <a href="/instagram" className="icon-circle">
                <i className="iconinsta">
                  <FaInstagram className="text-2xl hover:text-red-500" />
                </i>
              </a>
              <a href="/linkedin" className="icon-circle">
                <i className="iconin">
                  <FaLinkedin className="text-2xl hover:text-blue-400" />
                </i>
              </a>
              <a href="/twitter" className="icon-circle">
                <i className="icontw">
                  <FaTwitter className="text-2xl hover:text-blue-400" />
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright bg-teal-700 text-white text-center py-4">
          <p className="footer-copyright-text text-sm">
            ©2021. | BitByBit Solutions. | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
