import React from 'react';
import '../../pages/Recruitment/Recruitment.scss';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Canvas from '../../shared/Canvas';
import $ from 'jquery';
import RecruitmentSplitCard from '../../pages/Recruitment/RecruitmentSplitCard';
import staff from '../../assets/images/staff.png';
// import PremanentPlacement from '../../assets/images/erp-development.png';
import PremanentPlacement from '../../assets/images/premanent.png';
// import webdevelopment from '../../../assets/images/webdevelopment.png';
import webdevelopment from '../../assets/images/contract-to-hire.png';


var target = $('canvas');
var targetHeight = target.outerHeight();

$(window).on("load scroll", function(){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', 0.8);
    }
});


const Recruitment = () => {


  return (
    <div className="recrHomepageMain">
    <Header ></Header>
    <div className="recrpage">
        <div className="hero">
        <Canvas/> 
        <div class="content" id="recrcontent">
            <h4>BitByBit Solutions</h4>
            <p>Placing the right talent at the right time<br/> for your business.</p>
        </div>
    </div>
        <div className="secondary-section">
            <div className="label">
                <h1 className="oneliner">Placing the right talent, <span style={{color : "#0060b5"}}>Everytime!</span></h1>
            </div>
            <RecruitmentSplitCard></RecruitmentSplitCard>
        </div>
    </div>

    <div className="third-section">
        <div className="row">
            <h2>Related Services</h2>
            <div className="icon-card__container small-12">
                <div className="small-12 medium-4 columns icon-card icon-card--large">
                    <div className="card-content">
                        <div className="icon-border-bottom">
                        <img src={PremanentPlacement}alt=""></img>
                            <div className="icon-card__description">
                                <h4 className="icon-card__title icon-card__title--expanded">
                                Permanent Placement
                                </h4>
                                <p className="small text-center">We help organisations hire expert full-time talent for middle, 
                                senior and top level positions across diverse sectors.  
                              </p>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-12 medium-4 columns icon-card icon-card--large">
                    <div className="card-content-blue">
                        <div className="icon-border-bottom">
                        <img src={staff}alt=""></img>
                            <div className="icon-card__description">
                                <h4 className="icon-card__title icon-card__title--expanded">
                                Staffing Solutions
                               
                                </h4>
                                <p className="small text-center">Building an agile and flexible workforce requires an easy and fast
                                 access to expert talent, available on short notice. We offer a pool of pre-screened 
                                 talent, hired on our rolls.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-12 medium-4 columns icon-card icon-card--large">
                    <div className="card-content">
                        <div className="icon-border-bottom">
                        <img src={webdevelopment}alt=""></img>
                            <div className="icon-card__description">
                                <h4 className="icon-card__title icon-card__title--expanded">
                                Contract to Hire
                                </h4>
                                <p className="small text-center">Our Temp-to-Hire services allow organisations the opportunity to
                                 evaluate a candidate over a period of time before on-boarding the candidate at the end of the
                                  contract period.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='recr-footer'>
<Footer /></div>   
</div>

  );


}



export default Recruitment;