import React from "react";
import "../../components/Services/TechnologyService.scss";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Image1 from "../../assets/images/androidios.jpg";
import Image2 from "../../assets/images/ux.png";
import rsimage from "../../assets/images/18383-removebg-preview.png";
import webdevelopment from "../../assets/images/webdev.png";
import techservice from "../../assets/images/techservice.png";
const TechnologyService = (props) => {
  return (
    <div className="service-div-main">
      <Header textColor={"white"} backgroundColor={"#0060B5"}></Header>
      <div className="service-main">
        <div className="service-hero-title">
          <div className="tech_service_title">
            <div className="tech_service-hero-title">
              <h1>Not just another Tech company</h1>

              <p>Build business applications, Better. Faster.</p>
            </div>

            <img
              src={techservice}
              alt=""
              style={{
                maxwidth: "100vh",
                height: "100%",
                maxHeight: "80vh",
                width: "100%",
                background: "cover",
                marginTop: "80px",
                flex: "1",
                backgroundRepeat: "no-repeat",
                backgroundSize: "fitCenter",
                marginRight: "40px",
                padding: "10px",
              }}
            ></img>
          </div>
        </div>
        <div class="service-content"> </div>

        {/* <div class="service-title"> */}
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
                      Android & IOS Applications Development
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
                    style={{ marginBottom: "30px" }}
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

      <section className="service-section">
        <div className="service-div">
          <div className="service-content-section">
            <p className="tech-service-p">
              Founded and Headed by Tech savvy, like minded people, BitByBit has
              been offering state-of-the-art technology solutions to its
              clients. we have a special expertise in coding, designing,
              programming, testing and then delivering different software
              solutions to our clients. The industries we serve, so far, are e
              Governance, Fintech, Healthcare and Technology corporations. We
              have a team of young but highly knowledgeable and highly
              experienced professionals which are well equipped to offer our
              clients the best technological solutions in the form of customized
              software applications whether web based or mobile based. All our
              technology solutions are delivered bug-free. We offer an extremely
              development lifecycle to ensure an uninterrupted service. We
              deliver exactly what you need.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default TechnologyService;
