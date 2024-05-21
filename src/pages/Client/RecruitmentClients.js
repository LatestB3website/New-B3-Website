import React from "react";
import "./Commonclient.scss";
import $ from "jquery";
import Canvas from "../../shared/Canvas";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import TiltCard from "../../components/TiltCard/TiltCard";
import seclore from "../../assets/images/seclore.png";
import cybage from "../../assets/images/cybage.jpg";
import aqm from "../../assets/images/aqm.jpg";
import gfitech from "../../assets/images/gfi.webp";
import vivant from "../../assets/images/Vivant Technologies.jpg";
import clariontech from "../../assets/images/ClarionTechnologies.jpg";
import interrust from "../../assets/images/interrust.jpg";
import tatatech from "../../assets/images/tatatech.png";
import citius from "../../assets/images/citius.png";
import delmon from "../../assets/images/delmon.png";
import itc from "../../assets/images/itc.jpg";
import nseit from "../../assets/images/NSEiT.png";
import BlockCard from "../../components/CardComponent/BlockCard";
import quality from "../../assets/images/quality.png";
import personnel from "../../assets/images/personnel.jpg";
import innovation from "../../assets/images/innovation.jpg";
import commitment from "../../assets/images/commitment.jpg";
import care from "../../assets/images/care.jpg";
import support from "../../assets/images/support.jpg";

var target = $("canvas");
var targetHeight = target.outerHeight();

$(window).on("load scroll", function () {
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  if (scrollPercent >= 0) {
    target.css("opacity", 0.8);
  }
});

const RecruitmentClients = () => {
  return (
    <div className="clientMain">
      <Header textColor={"white"} backgroundColor={"#0060B5"}></Header>
      <div className="clientHero">
        <Canvas />

        <div className="clientContent">
          <div className="clientTitle">
            <h4>Our Clients Trust Us</h4>
            <p>We did a great job with these companies</p>
            <p>You can be next.</p>
          </div>
        </div>
      </div>

      <div className="clientSecondSection">
        <div className="label">
          <h3>Pleasure to work with</h3>
        </div>
        <div className="clientRow1">
          <TiltCard image={tatatech}></TiltCard>
          <TiltCard image={nseit}></TiltCard>
          <TiltCard image={cybage}></TiltCard>
        </div>
        <div className="clientRow2">
          <TiltCard image={itc}></TiltCard>
          <TiltCard image={gfitech}></TiltCard>
          <TiltCard image={aqm}></TiltCard>
        </div>
        <div className="clientRow3">
          <TiltCard image={vivant}></TiltCard>
          <TiltCard image={delmon}></TiltCard>
          <TiltCard image={seclore}></TiltCard>
        </div>
        <div className="clientRow4">
          <TiltCard image={clariontech}></TiltCard>
          <TiltCard image={citius}></TiltCard>
          <TiltCard image={interrust}></TiltCard>
        </div>
      </div>

      <div className="clientThirdSection">
        <div className="secondLabel">
          <h1 className="oneliner">Why Choose Us</h1>
          <div className="clientLine"></div>
        </div>
        <div className="rowCards">
          <BlockCard
            image={quality}
            number="01"
            title="Quality"
            description="We strive to ensure there is Quality in everything we do."
          />
          <BlockCard
            image={personnel}
            number="02"
            title="Personnel"
            description="We have the best people working with us to give you what you want."
          />
          <BlockCard
            image={innovation}
            number="03"
            title="Innovation"
            description="We are always thinking about new ways to amaze you with our Innovative practices."
          />
          <BlockCard
            image={commitment}
            number="04"
            title="Commitment"
            description="We promise to stay committed to your cause for as long as you need."
          />
          <BlockCard
            image={care}
            number="05"
            title="Care"
            description="We treat our clients as our own family, with care & empathy."
          />
          <BlockCard
            image={support}
            number="06"
            title="Support"
            description="We will be there for you even after we have parted ways."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default RecruitmentClients;
