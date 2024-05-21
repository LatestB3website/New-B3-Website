import React from "react";
import "./AboutUsMain.scss";
import Header from "../../components/Header/header";
import $ from "jquery";
import Footer from "../../components/Footer/footer";
import Canvas from "../../shared/Canvas";
import Transparency from "../../assets/images/Transparency.png";
import Ethics from "../../assets/images/Ethics.png";
import Responsibility from "../../assets/images/Responsibility.png";
import TeamWork from "../../assets/images/Teamwork.png";
import WebDesign from "../../assets/images/webdesign.jpg";
import mission from "../../assets/images/mission.png";
import vission from "../../assets/images/vision.png";
var target = $("canvas");
var targetHeight = target.outerHeight();

$(window).on("load scroll", function () {
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  if (scrollPercent >= 0) {
    target.css("opacity", 0.8);
  }
});
const AboutUsMain = () => {
  return (
    <div className="aboutus-HomepageMain">
      <Header textColor={"white"} backgroundColor={"#0060B5"}></Header>
      <div className="aboutuspage">
        <div className="aboutus-hero">
          <Canvas />
          <div class="aboutus-content" id="aboutus-techcontent">
            <h1>BitByBit Solutions</h1>

            <p>Development Services with cutting edge technology.</p>
          </div>
        </div>
        <div className="aboutus-secondary-section">
          <div className="aboutus-label">
            <div className="aboutus-description">
              <h3 className="aboutus-introd">
                BitByBit Solutions is a growing and young TECHNOLOGY solutions
                providing start up based out of commercial capital of India i.e.
                Mumbai. An India based technology services provider firm
                specialized in providing IT Solutions to reputed clients in
                India and Indo-Pacific region. We started our operations in
                early 2018. Our team offers high quality services which helps
                provide the best outcomes in the services we deliver to our
                clients. Team comprises of people who are young, passionate and
                come Technology experience from a diverse set of business
                sectors. Currently we are working with clients like IPS e
                Services P L, Remedo Advisor, Viteos Capital (acquired by
                ITG-Inter Trust Global), BRICSA Consulting, etc on their
                requirements of Software Application Development. We have also
                worked for Aditya Birla Insurance (Aditya Birla Capital), Citius
                Tech, SS&C Globe-Op, Remedo Advisor, NumberTree Advisors, NSEiT,
                Concept Securities and more for their Tech resource
                requirements. Usually our Tech resources work from our premises,
                but in case if client requires on site tech delivery by making
                our tech resources sit at their office(s), we provide that
                service as well. We do this for our client VITEOS CAPITAL (now
                ITG) & Remedo Advisor for their Bangalore, Chennai & Mumbai
                locations.
              </h3>
            </div>

            <div className="aboutus-seconder-section-inner">
              <div className="aboutus-expandCard">
                <div className="expandCard">
                  <div className="expandCardImage">
                    <img src={mission}></img>
                  </div>
                  <div className="expandCardContent">
                    {/* <div class="expandCardCategory">{'OUR MISSION'}</div> */}
                    <div class="expandCardBox">
                      {/* <h1>{'OUR MISSION'}</h1> */}
                      <h2>
                        {
                          "We strive to provide a tailored, end to end services to our clients and establishing strong partnerships to ensure we understand each others goals and deadlines, without compromising our professional and ethical standards."
                        }
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="expandCard">
                  <div className="expandCardImage">
                    <img src={vission}></img>
                  </div>
                  <div className="expandCardContent">
                    {/* <div class="expandCardCategory">{"OUR VISION"}</div> */}
                    <div class="expandCardBox">
                      {/* <h1>{"OUR VISION"}</h1> */}
                      <h2>
                        {
                          "To build trust by establishing a winning value chain system based on the ever changing surroundings, with the utmost focus on transforming lives and providing solutions."
                        }
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid" style={{ paddingTop: "20px" }}>
            <div
              class="Container"
              style={{ paddingBottom: "240px", margintop: "60px" }}
            >
              <h1
                style={{
                  textTransform: "uppercase",
                  fontFamily: " Druk-Heavy",
                  textAlign: "center",
                  fontSize: "70px",
                  color: "black",
                  letterSpacing: "2px",
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
                  texttransform: "uppercase",
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
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        TRANSPARENCY
                      </h1>
                      <p
                        class="w3-animate-bottom"
                        style={{
                          color: "black",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          fontSize: "16px",
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
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        RESPONSIBILITY
                      </h1>
                      <p
                        class="w3-animate-bottom"
                        style={{
                          color: "black",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          fontSize: "16px",
                        }}
                      >
                        We are accountable for our actions, commitments and
                        results.
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
                        src={Ethics}
                        style={{ width: "200px", height: "200px" }}
                      ></img>
                      <h1
                        class="w3-animate-left"
                        style={{
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        ETHICS
                      </h1>
                      <p
                        class="w3-animate-bottom"
                        style={{
                          color: "black",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          fontSize: "16px",
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
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        &nbsp;TEAMWORK
                      </h1>
                      <p
                        class="w3-animate-bottom"
                        style={{
                          color: "black",
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          fontSize: "16px",
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
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AboutUsMain;
