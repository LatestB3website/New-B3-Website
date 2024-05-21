import React from "react";
import "./AboutUs.css";
import Header from "../../components/Header/header";
import Why from "../../assets/images/Why.png";
import WhoWeAre from "../../assets/images/WhoWeAre.png";
import Logo from "../../assets/images/b3stamp.png";
import WhatWeDo from "../../assets/images/WhatWeDo.png";
import Transparency from "../../assets/images/Transparency.png";
import Ethics from "../../assets/images/Ethics.png";
import Responsibility from "../../assets/images/Responsibility.png";
import TeamWork from "../../assets/images/Teamwork.png";
import Footer from "../../components/Footer/footer";
import Homepage from "../Technology/techhomepage/homepage";

const Aboutus = () => {
  return (
    <div
      class="maindiv"
      style={{
        backgroundColor: "#0060b5",
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      <div class="background">
        <Homepage />
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>

        {/* <Background></Background> */}
        {/* <div class="logo"><span>N</span></div> */}
        {/* -- title & content -- */}

        <section class="header-content">
          <h1 style={{ color: "white", textAlign: "center", fontSize: "70px" }}>
            <i>ABOUT</i>
            <br></br>
            {/* <svg width="100%" height="100%">
                  <text x="50%" y="60%"  text-anchor="middle">BitByBit Solutions</text>
                  </svg> */}
            <i>BITBYBIT SOLUTIONS</i>
          </h1>

          {/* <h1 style={{ color: "white", textAlign: "center", fontSize: "70px" }}>

            <i><span class="flicker">BitByBit Solutions</span> </i>
          </h1> */}

          <h1
            class="w3-animate-left"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "revert",
            }}
          >
            <i>" We Make It Happen "</i>
          </h1>
        </section>
        <br></br>
        <div
          class="container-fluid"
          style={{
            textAlign: "center",
            paddingTop: "20px",
            paddingRight: "30px",
            paddingLeft: "30px",
            paddingBottom: "20px",
          }}
        >
          <h1
            class="w3-animate-right"
            style={{
              fontSize: "30px",
              color: "black",
              fontFamily: "Fira",
              textAlign: "center",
            }}
          >
            <b>
              {" "}
              "Looking at the IT market place and opportunities in India
              BitbyBit Solutions intend
              <br></br>to serve the clients with Managed IT Solutions & their
              staffing needs. "
            </b>
          </h1>
        </div>
        <br></br>
        <br></br>

        <div
          class="container-fluid"
          style={{ paddingTop: "20px", backgroundsize: "auto" }}
        >
          <div class="Container" id="inner">
            <div
              class="row justify-content-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div class="row">
                <div
                  class="col order-last order-xl-first order-md-first"
                  id="Con"
                  style={{ width: "500px", paddingLeft: "110px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <h1
                      class=" w3-animate-left"
                      style={{
                        fontSize: "34px",
                        fontFamily: "Montserrat",
                        textAlign: "left",
                        color: "white",
                      }}
                    >
                      <b>WHY BITBYBIT SOLUTIONS?</b>
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      style={{
                        color: "white",
                        fontFamily: "cursive",
                        textAlign: "left",
                        fontSize: "20px",
                      }}
                    >
                      We’re more than just a tech company. We’ve got goals,
                      hopes, and dreams, just like you.
                      <br></br> We want to serve a better solution to a
                      centuries old profession and do some good in the world
                      while we’re at it—permanently.
                      <br></br>
                      We know our technology changes lives. If that’s something
                      that speaks to you—you belong here, too.
                    </p>
                  </div>
                </div>

                <div
                  class="col order-first order-xl-last order-md-last"
                  style={{ width: "500px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <img
                      class="w3-animate-right"
                      src={Why}
                      style={{
                        width: "800px",
                        height: "400px",
                        paddingLeft: "160px",
                      }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" style={{ paddingTop: "20px" }}>
          <div class="Container">
            <div
              class="row justify-content-center"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <div class="row">
                <div
                  class="col order-last order-xl-first order-md-first"
                  style={{ width: "500px", paddingLeft: "110px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <img
                      class="w3-animate-left"
                      id="animate1"
                      src={WhoWeAre}
                      style={{ width: "400px", height: "400px" }}
                    ></img>
                  </div>
                </div>
                <div
                  class="col order-first order-xl-last order-md-last"
                  id="Con"
                  style={{ width: "500px", paddingLeft: "120px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <h1
                      class=" w3-animate-right"
                      id="animate1"
                      style={{
                        fontSize: "34px",
                        fontFamily: "Montserrat",
                        textAlign: "left",
                        color: "#cf27fc",
                      }}
                    >
                      <i>
                        <b>WHO WE ARE</b>
                      </i>
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      id="animate1"
                      style={{
                        color: "white",
                        fontFamily: "cursive",
                        textAlign: "left",
                        fontSize: "20px",
                      }}
                    >
                      BitByBit solutions provides Managed IT and Application
                      development services in industry verticals.
                      <br></br>
                      BitByBit solutions contributes towards the national
                      imperative by ensuring a steady supply of trained manpower
                      to manage resources.
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" style={{ paddingTop: "20px" }}>
          <div class="Container" id="inner">
            <div
              class="row justify-content-center"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <div class="row">
                <div
                  class="col order-last order-xl-first order-md-first"
                  id="Con"
                  style={{ width: "500px", paddingLeft: "110px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <h1
                      class=" w3-animate-top"
                      id="animate2"
                      style={{
                        fontSize: "34px",
                        fontFamily: "Montserrat",
                        textAlign: "left",
                        color: "white",
                      }}
                    >
                      <b>HOW WE GOT STARTED</b>
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      id="animate2"
                      style={{
                        color: "white",
                        fontFamily: "cursive",
                        textAlign: "left",
                        fontSize: "20px",
                      }}
                    >
                      BitByBit Solutions established in 2017, with a mission to
                      provide cutting edge technology solutions on Application
                      Development & Niche Staffing Solutions to our clients.
                      <br></br>
                      Our web development company has been developing web
                      applications for the custom business requirements of all
                      our esteemed clients. <br></br>
                    </p>
                  </div>
                </div>
                <div
                  class="col order-first order-xl-last order-md-last"
                  style={{ width: "500px", paddingLeft: "120px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <img
                      class="w3-animate-right"
                      id="animate2"
                      src={Logo}
                      style={{
                        width: "400px",
                        height: "400px",
                        paddingLeft: "50px",
                      }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" style={{ paddingTop: "20px" }}>
          <div class="Container">
            <div
              class="row justify-content-center"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <div class="row">
                <div
                  class="col order-last order-xl-first order-md-first"
                  style={{ width: "500px", paddingLeft: "110px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <img
                      class="w3-animate-left"
                      id="animate3"
                      src={WhatWeDo}
                      style={{ width: "400px", height: "400px" }}
                    ></img>
                  </div>
                </div>
                <div
                  class="col order-first order-xl-last order-md-last"
                  id="Con"
                  style={{ width: "500px", paddingLeft: "120px" }}
                >
                  <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                    <h1
                      class=" w3-animate-top"
                      id="animate3"
                      style={{
                        fontSize: "34px",
                        fontFamily: "Montserrat",
                        textAlign: "left",
                        color: "#cf27fc",
                      }}
                    >
                      <i>
                        <b>WHAT WE DO</b>
                      </i>
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      id="animate3"
                      style={{
                        color: "white",
                        fontFamily: "cursive",
                        textAlign: "left",
                        fontSize: "20px",
                      }}
                    >
                      BitByBit Solutions e-commerce platform take the entire
                      experience marketplaces and communities deliver and put
                      them on the internet in the form of web applications.
                      <br></br>We have plethora of web application services that
                      caters to all your business needs. <br></br>
                      Our esteemed programmers are always dedicated to deliver
                      custom web application development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" style={{ paddingTop: "20px" }}>
          <div class="Container" style={{ paddingBottom: "240px" }}>
            <h1
              class="font-effect-outline"
              style={{
                fontFamily: "Lobster",
                textAlign: "center",
                fontSize: "70px",
                color: "#f5faf8",
              }}
            >
              Our core values guide how we work
            </h1>
            <div
              class="row justify-content-center"
              style={{
                paddingTop: "10px",
                paddingBottom: "90px",
                paddingLeft: "70px",
                paddingRight: "70px",
              }}
            >
              <div id="row">
                <div id="column">
                  <div
                    class="container-fluid"
                    id="event"
                    style={{ lineHeight: "1.8" }}
                  >
                    <img
                      class="img"
                      id="sweetlandia"
                      src={Transparency}
                      style={{ width: "200px", height: "200px" }}
                    ></img>
                    <h1
                      class="w3-animate-left"
                      style={{
                        fontSize: "25px",
                        fontFamily: "cursive",
                        textAlign: "left",
                        color: "black",
                      }}
                    >
                      TRANSPARENCY
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      style={{
                        color: "white",
                        fontFamily: "revert",
                        textAlign: "center",
                        fontSize: "22px",
                      }}
                    >
                      We build trust & commitment through openness &
                      accountability within our team and with our clients.
                      <br></br>
                    </p>
                  </div>
                </div>

                <div id="column">
                  <div
                    class="container-fluid"
                    id="event"
                    style={{ lineHeight: "1.8", paddingLeft: "40px" }}
                  >
                    <img
                      class="img"
                      id="sweetlandia"
                      src={Responsibility}
                      style={{ width: "300", height: "200px" }}
                    ></img>
                    <h1
                      class="w3-animate-left"
                      style={{
                        fontSize: "25px",
                        fontFamily: "cursive",
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      RESPONSIBILITY
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      style={{
                        color: "white",
                        fontFamily: "revert",
                        textAlign: "center",
                        fontSize: "22px",
                      }}
                    >
                      We are accountable for our actions, commitments and
                      results.
                    </p>
                  </div>
                </div>
                {/* <div class="column">
                  <div class="container-fluid" id="event" style={{ lineHeight: "1.8" }}>
                    <img class="img" id='sweetlandia' src={Ethics} style={{ width: "200px", height: "200px" }}></img>
                    <h1 class="w3-animate-left" style={{ fontSize: "25px", fontFamily: "cursive", textAlign: "left", color: "black" }}>ETHICS</h1>
                    <p class="w3-animate-bottom" style={{ color: "white", fontFamily: "tangerine", textAlign: "center", fontSize: "32px" }}>
                      We build trust & commitment through openness & accountability within our team and with our clients.
                      <br></br>
                    </p>

                  </div>
                </div> */}
                {/* <div class="column" >
                  <div class="container-fluid" id="event" style={{ lineHeight: "1.8", paddingLeft: "60px" }}>
                    <img class="img" id="sweetlandia" src={Ethics} style={{ width: "200px", height: "200px" }}></img>
                    <h1 class="w3-animate-left" style={{ fontSize: "25px", fontFamily: "cursive", textAlign: "center", color: "black" }}>ETHICS</h1>
                    <p class="w3-animate-bottom" style={{ color: "white", fontFamily: "tangerine", textAlign: "center", fontSize: "32px" }}>
                    We build trust & commitment through openness & accountability within our team and with our clients.
                    </p>
                  </div>
                </div> */}
                <div id="column">
                  <div
                    class="container-fluid"
                    id="event"
                    style={{ lineHeight: "1.8", paddingLeft: "50px" }}
                  >
                    <img
                      class="img"
                      id="sweetlandia"
                      src={Ethics}
                      style={{ width: "200px", height: "200px" }}
                    ></img>
                    <h1
                      class="w3-animate-left"
                      style={{
                        fontSize: "25px",
                        fontFamily: "cursive",
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      ETHICS
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      style={{
                        color: "white",
                        fontFamily: "revert",
                        textAlign: "center",
                        fontSize: "22px",
                      }}
                    >
                      We have a strong Work Ethic.If we say we are going to do
                      it,we do it in a right way.
                      <br></br>
                    </p>
                  </div>
                </div>

                <div id="column">
                  <div
                    class="container-fluid"
                    id="event"
                    style={{ lineHeight: "1.8", paddingLeft: "50px" }}
                  >
                    <img
                      class="img"
                      id="sweetlandia"
                      src={TeamWork}
                      style={{ width: "200px", height: "200px" }}
                    ></img>
                    <h1
                      class="w3-animate-left"
                      style={{
                        fontSize: "25px",
                        fontFamily: "cursive",
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      &nbsp;TEAMWORK
                    </h1>
                    <p
                      class="w3-animate-bottom"
                      style={{
                        color: "white",
                        fontFamily: "revert",
                        textAlign: "center",
                        fontSize: "22px",
                      }}
                    >
                      We work together across boundaries to meet the needs of
                      our clients & help in achieving company's goals.
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Aboutus;
