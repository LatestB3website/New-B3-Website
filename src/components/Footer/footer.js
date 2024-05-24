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

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer  " style={{ backgroundImage: "radial-gradient(circle at bottom right  , rgba(86,255,248,1) 1%, rgba(13,11,136,1) 53%)" }}>
        <div className="footer-content container mx-auto h-96 ">
          <div className="row flex flex-wrap">
            <div className="footer-col w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 sm:mb-0 mt-10">
              <div className="footer-logo mb-6">
                <a className="footer-logo-link" href="/">
                  <img src={Imagelogo} alt="Imagelogo" className="w-20 h-20" />
                </a>
              </div>
              <div className="footer-menu">
                <h4 className="footer-menu-name text-xl text-white capitalize mb-8 relative font-medium">
                  Get Started
                  <span className="block w-12 h-0.5 bg-pink-500 absolute left-0 -bottom-2"></span>
                </h4>
                <ul className="footer-menu-list space-y-3">
                  <li>
                    <a href="/" className="text-base text-gray-400 hover:text-emerald-300	hover:pl-2 transition-all">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/technology" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="/recruitment" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Recruitment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col  sm:w-1/2 lg:w-1/4 px-4 mb-8 mt-20 sm:mb-0 ">
              <div className="footer-menu">
                <h4 className="footer-menu-name text-xl text-white capitalize mb-8  relative font-medium">
                  Company
                  <span className="block w-12 h-0.5 bg-pink-500 absolute left-0 -bottom-2"></span>
                </h4>
                <ul className="footer-menu-list space-y-3">
                  <li>
                    <a href="/Contact" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/Careers" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/technology-clients" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Technology Clients
                    </a>
                  </li>
                  <li>
                    <a href="/recruitment-clients" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Recruitment Clients
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col w-full sm:w-1/2 lg:w-1/4 px-4  sm:mb-0 ">
              <div className="footer-menu">
                <h4 className="footer-menu-name text-xl text-white capitalize mb-8 mt-20  relative font-medium">
                  Quick Links
                  <span className="block w-12 h-0.5 bg-pink-500 absolute left-0 -bottom-2"></span>
                </h4>
                <ul className="footer-menu-list space-y-3">
                  <li>
                    <a href="/technology-services" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Technology Services
                    </a>
                  </li>
                  <li>
                    <a href="/recruitment-services" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2 transition-all">
                      Recruitment Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col  sm:w-1/2 lg:w-1/4 px-4  sm:mb-0 mb-20 mt-20">
              <div className="footer-call-to-action  ">
                <h4 className="footer-call-to-action-title  text-xl   text-white capitalize mb-4 relative font-medium ">
                  You Call Us
                  <span className="block w-12 h-0.5 bg-pink-500 absolute left-0 -bottom-2"></span>
                </h4>
                <p className="footer-call-to-action-link-wrapper ">
                  <a href="tel:0124-64XXXX" className="text-base text-gray-400 hover:text-emerald-300 hover:pl-2  transition-all">
                    (+91) 022 65510355
                  </a>
                </p>
              </div>
              <div className="footer-call-to-action ">
                <h4 className="footer-call-to-action-title text-xl text-white capitalize mb-4 relative font-medium">
                  Address
                  <span className="block w-12 h-0.5 bg-pink-500 absolute left-0 -bottom-2"></span>
                </h4>
                <p className="text-base text-gray-400">
                  912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093
                </p>
              </div>
              <div className="social-media flex gap-3 mt-2 ">
                <a href="/facebook" className="social-links text-blue-400 hover:text-gray-900 hover:bg-white bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center transition-all">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="/instagram" className="social-links text-red-500 hover:text-gray-900 hover:bg-white bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center transition-all">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="/linkedin" className="social-links text-blue-400 hover:text-gray-900 hover:bg-white bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center transition-all">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="/twitter" className="social-links text-blue-400 hover:text-gray-900 hover:bg-white bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center transition-all">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright bg-teal-700 text-white text-center py-4 " >
          <p className="text-sm">
            ©2021. | BitByBit Solutions. | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
