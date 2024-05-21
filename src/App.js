import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/landingPage";
import Service from "./components/Services/Service";
import Careers from "./pages/Careers/Careers.jsx";
import RecruitmentClients from "./pages/Client/RecruitmentClients";
import TechnologyClients from "./pages/Client/TechnologyClients";
import Contact from "./pages/Contact/Contact";
import Aboutus from "./pages/AboutUs/AboutUs";
import Header from "./components/Header/header";
import Recruitment from "./pages/Recruitment/Recruitment";
import TechnologyService from "./components/Services/TechnologyService";
import TiltCard from "./components/TiltCard/TiltCard";
import ExpandableCard from "./components/CardComponent/ExpandableCard";
import RecruitmentService from "./components/Services/RecruitmentService";
import AboutUsMain from "./pages/AboutUs/AboutUsMain";
import Homepage from "./pages/Technology/techhomepage/homepage.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/aboutus" element={<AboutUsMain />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/technology" element={<Homepage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/technology-clients" element={<TechnologyClients />} />
        <Route path="/recruitment-clients" element={<RecruitmentClients />} />
        <Route path="/technology-services" element={<TechnologyService />} />
        <Route path="/recruitment-services" element={<RecruitmentService />} />
        <Route path="/contact" element={<Contact />} />
        {/* External Links */}
        <Route
          path="/linkedin"
          element={() => {
            window.location.href =
              "https://www.linkedin.com/company/bitbybit-solutions/";
            return null;
          }}
        />
        <Route
          path="/instagram"
          element={() => {
            window.location.href =
              "https://www.instagram.com/bitbyitsolutions/";
            return null;
          }}
        />
        <Route
          path="/facebook"
          element={() => {
            window.location.href =
              "https://www.facebook.com/Bitbybit-Solutions-110527858156230";
            return null;
          }}
        />
        <Route
          path="/twitter"
          element={() => {
            window.location.href = "https://twitter.com/BitByBitSoluti1";
            return null;
          }}
        />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import LandingPage from "./pages/Landing/landingPage";
// const App = () => {
//   return (
//     <div>
//       <LandingPage />
//     </div>
//   );
// };

// export default App;
