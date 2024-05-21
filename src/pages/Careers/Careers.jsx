import React from 'react';
import Space from './Space';
import Circle from './Circle';
//import BG from '../../assets/images/career.png';
import Career from '../../assets/images/career.png';
import Career1 from '../../assets/images/WhatWeDo.png';
import Cards from './Cards';
import Header from '../../components/Header/header';
import './Background.css';
// import Image1 from '../../assets/images/WhatWeDo.png';
// import Image2 from '../../assets/images/careersone.png';
import Footer from '../../components/Footer/footer';
import PremanentPlacement from '../../assets/images/premanent.png';
import webdevelopment from '../../assets/images/webdevelopment.png';
import Image1 from '../../assets/images/androidios.jpg';
import imgSupport from '../../assets/images/softwareengineer.png'
import dotDeveloper from '../../assets/images/webdevloper.png'
import socialmedia from '../../assets/images/socialmedia.png'
import ITRecruiter from '../../assets/jdpdf/ITRecruiter.pdf'
import DotNetDeveloper from '../../assets/jdpdf/NETDeveloper.pdf' 
import SMO from '../../assets/jdpdf/JDforSocialMediaExecutive.pdf'
import JDforSupportDeveloper from '../../assets/jdpdf/JDforSupportDeveloper.pdf'
const Careers = (props) => {
  return (
    <div style={{ backgroundColor: "#0060b5" }}>
      <Header></Header>
    

      <div class="container-fluid" style={{ paddingTop: "20px", backgroundsize: "auto" }}>
        <div class="Container"  >
          <div class="row justify-content-center" style={{ paddingTop: "40px", paddingBottom: "0px" }}>
            <div class="row" >

              <div class="col order-last order-xl-first order-md-first" id="Con" style={{ width: "500px", paddingTop: "110px" }} >
                <div class="container-fluid" style={{ lineHeight: "1.8" }}>
                  {/* <svg width="100%" height="100%">
                  <text x="50%" y="60%"  text-anchor="middle"  > CAREER</text>
                  </svg> */}
                  <h1 style={{  fontFamily: "Druk-Heavy",color: "white", textAlign: "center", fontSize: "98px" }}>CAREER</h1>
                  {/* <h1 class=" w3-animate-left" style={{ fontSize: "78px", fontFamily: "Audiowide", textAlign: "center", color: "white" }}><b> CAREER </b></h1> */}
                  <h2 style={{ color: "white", fontFamily: "Montserrat", textAlign: "center", fontSize: "34px" }}>
                    &nbsp;&nbsp;Let's Work Together and Explore Opportunities</h2>
                </div>
              </div>
              <div class="col order-first order-xl-last order-md-last" style={{ width: "800px", paddingLeft: "10px" }}>
                <div class="container-fluid" style={{ marginTop:"40px"}}>
                  <img src={Career} style={{ width: "90%", height: "90%" }}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div style={{ paddingTop: "80px", backgroundColor: "0060B5",maxWidth:"100%",width:"100%" }}> 
       <div class="Container" style={{ paddingBottom: "20px" }}>
          <h1 style={{ fontFamily: "Druk-Heavy",textTransform: "uppercase", textAlign: "center", fontSize: "70px", color: "white" }} >Open Positions</h1>
          <div class="row justify-content-center" style={{ paddingTop: "10px", paddingBottom: "70px", paddingLeft: "40px", paddingRight: "60px" }}>
            <div class="row">
              <p class="w3-animate-right" id="animate3" style={{ color: "white", fontFamily: "Montserrat", textAlign: "center", fontSize: "20px" }}>
                We’re looking for people to join the team who are as excited as we are to help build the platform that empowers the future generation of technology.
              </p>
          
           



            </div>
          </div>
        </div> 

<div>
<div className="third-section">
                    <div className="row">
                        <h2>Current Openings</h2>
                        <div className="icon-card__container small-12">
                            <div className="small-12 medium-4 columns icon-card icon-card--large">
                                <div className="card-content">
                                    <div className="icon-border-bottom">
                                       <img src={Image1}alt=""></img>
                                        <div className="icon-card__description">
                                            <h4 className="icon-card__title icon-card__title--expanded">
                                            Mobile App Developer
                                            </h4>
                                            <a  style={{ paddingBottom:"10px",color:"blue",alignItems:"center"}}
                                            href={Image1}
                                            download
                                            >
                                             Click to download JD
                                            </a>
                                            {/* <p className="small text-center">For business and consumer apps that work across apple and android devices and consume services from the cloud.</p>
                                           
                                         */}
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-4 columns icon-card icon-card--large">
                                <div className="card-content-blue">
                                    <div className="icon-border-bottom">
                                        <img src={webdevelopment}alt=""></img>
                                        <div className="icon-card__description">
                                            <h4 className="icon-card__title icon-card__title--expanded">
                                            Web Developer
                                            </h4>
                                            <a  style={{ paddingBottom: "10px" ,color:"white"}}
                                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                                            download
                                            >
                                            Click to download JD
                                            </a>
                                            {/* <p className="small text-center">For business and consumer apps that work across apple and android devices and consume services from the cloud.</p>
                                         */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-4 columns icon-card icon-card--large">
                                <div className="card-content">
                                    <div className="icon-border-bottom">
                                      <img src={PremanentPlacement}alt=""></img>
                                        <div className="icon-card__description">
                                            <h4 className="icon-card__title icon-card__title--expanded">
                                           IT Recruitment Executive                                            </h4>
                                            <a  style={{ paddingBottom: "10px" ,color:"blue"}}
                                            href={ITRecruiter}
                                            download
                                            >
                                            Click to download JD
                                            </a>
                                            {/* <p className="small text-center">We help organisations hire expert full-time talent for middle, senior and top level positions across diverse sectors.</p>
                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
        
        
                </div>

                <div className="third-section">
                    <div className="row">
                        <div className="icon-card__container small-12">
                            <div className="small-12 medium-4 columns icon-card icon-card--large">
                                <div className="card-content">
                                    <div className="icon-border-bottom">
                                       <img src={imgSupport}alt=""></img>
                                        <div className="icon-card__description">
                                            <h4 className="icon-card__title icon-card__title--expanded">
                                            Dot net support
                                            </h4>
                                            <a  style={{ paddingBottom:"10px",color:"blue",alignItems:"center"}}
                                            href={JDforSupportDeveloper}
                                            download
                                            >
                                             Click to download JD
                                            </a>
                                            {/* <p className="small-text-center">For business and consumer apps that work across apple and android devices and consume services from the cloud.
</p> */}
                                           
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-4 columns icon-card icon-card--large">
                                <div className="card-content-blue">
                                    <div className="icon-border-bottom">
                                        <img src={dotDeveloper}alt=""></img>
                                        <div className="icon-card__description">
                                            <h4 className="icon-card__title icon-card__title--expanded">
                                            Dot net Developer
                                            </h4>
                                            <a  style={{ paddingBottom: "10px" ,color:"white"}}
                                            href={DotNetDeveloper}
                                            download
                                            >
                                            Click to download JD
                                            </a>
                                            {/* <p className="small-text">For business and consumer apps that work across apple and android devices and consume services from the cloud.</p>
                                         */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-12 medium-4 columns icon-card icon-card--large">
                                <div className="card-content">
                                    <div className="icon-border-bottom">
                                      <img src={socialmedia}alt=""></img>
                                        <div className="icon-card__description">
                                            <h4 className="icon-card__title icon-card__title--expanded">
                                            SMO Executive                                           </h4>
                                            <a  style={{ paddingBottom: "10px" ,color:"blue"}}
                                            href={SMO}
                                            download
                                            >
                                            Click to download JD
                                            </a>
                                            {/* <p className="small text-center">We help organisations hire expert full-time talent for middle, senior and top level positions across diverse sectors.</p>
                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
        
        
                </div>     

      </div>



      </div>

      <Footer></Footer>
    </div>
  );
}

export default Careers;




