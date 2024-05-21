import React from 'react';
import '../../components/Services/RecruitmentService.scss'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import TiltCard from '../TiltCard/TiltCard'
import staff from '../../assets/images/staff.png';
import PremanentPlacement from '../../assets/images/premanent.png';
import rsimage from '../../assets/images/erp-development.png';
import webdevelopment from '../../assets/images/contract-to-hire.png';

const RecruitmentService = (props) => {

    return (

        <div className='Recuit-Service-Hero-section'>

            <Header textColor={"white"} backgroundColor={"#0060B5"}></Header>

            <div className='Recuit-Service-hero-section'>

                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="recuit-service-hero-content">


                    <div className="recuit-service-hero-title">
                        <h1 >IT Recruitment Specialists </h1>


                        <p>We understand tech, Recruit with us.</p>




                    </div>


                    <img src={rsimage} alt="" style={{
                        height: "100%", width: "100%", background: "cover", marginTop: "120px",
                        maxHeight : "80vh",
                        flex: "1"
                    }}></img>


                </div>






            </div>

            <div>

                <div className="recuit-service-container">

                    <div className="third-section">
                        <div className="row">
                            <h2>Related Services</h2>
                            <div className="icon-card__container small-12">
                                <div className="small-12 medium-4 columns icon-card icon-card--large">
                                    <div className="card-content">
                                        <div className="icon-border-bottom">
                                            <img src={PremanentPlacement} alt=""></img>
                                            <div className="icon-card__description">
                                                <h4 className="icon-card__title icon-card__title--expanded">
                                                    Premanent Placement
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
                                            <img src={staff} alt=""></img>
                                            <div className="icon-card__description">
                                                <h4 className="icon-card__title icon-card__title--expanded">
                                                    Staffing Solutions
                                                </h4>
                                                <p className="small text-center">Building an agile and flexible workforce requires an easy and fast
                                                    access to expert talent, available on short notice. BitByBit Solutions offers a pool of pre-screened
                                                    talent, hired on our rolls.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 medium-4 columns icon-card icon-card--large">
                                    <div className="card-content">
                                        <div className="icon-border-bottom">
                                            <img src={webdevelopment} alt=""></img>
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


                </div>


                <section className='recuit-service-section'>

                    <div className='recuit-service-div'>
                        <div className='recuit-service-content-section'>
                            <p className='recuit-service-p'>BitByBit Solutions. is one of the top Technology/IT recruitment and staffing companies in India.

                                Incorporated in 2014, we have been pioneering TaaS (Talent-as-a-Service) solutions for large and medium sized businesses. We specialise in onboarding highly skilled talent for middle and senior level positions in the fastest possible time. We are a team of young, dynamic and seasoned recruitment specialists at BitByBit Solutions, office based at Mumbai - Solitaire Corporate Park, Andheri East. Our recruiters are well qualified and seasoned recruitment specialists having required relevant qualification background of Technical & Management.

                                Our top management holds multiple years of experience in Recruitment industry, so we understand the sector very well. We filter the candidates in the initial round by our self and provide you the quality candidates that can save your time.</p>

                        </div>
                    </div>

                </section>

            </div>


            <Footer />
        </div>

    )

}
export default RecruitmentService;