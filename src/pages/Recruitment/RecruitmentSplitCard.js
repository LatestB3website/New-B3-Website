import React, { Component } from 'react'
import '../Recruitment/RecruitmentSplitCard.scss'

export default class RecruitmentSplitCard extends Component {
    render() {
        return (
            <div className="recruitmentsplitcard">
                <div className="recruitmentflexbox">
                    <div className="recruitmentleftside">
                        <div className="recruitmentleftcontent">
                            <h2>Permanent Placement</h2>
                            <p>Our recruiting resources for permanent hiring can augment your internal HR efforts</p>
                            <hr className="recruitmentleftline"></hr>
                            <div className="recruitmentcardtable">
                                <ul>
                                    <li>Receive roles and responsibility of the required candidate.</li>
                                    <li>Attract suitable candidates towards the company. </li>
                                    <li>Gather all required details and prepare customized plan for recruitment. </li>
                                    <li>Shortlist right candidates.</li>
                                    <li>Verification of candidates regarding qualification and work experience. </li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="recruitmentmiddle">
                        <div className="recruitmentmiddlecontent">
                            <h2>Staffing Solutions</h2>
                            <p>Building an agile workforce available on short notice. Our Staff, Your Business.</p>
                            <hr className="recruitmentmiddleline"></hr>
                            <div className="recruitmentmiddlecardtable">
                                <ul>
                                    <li>Receive roles and responsibility of the required candidate.</li>
                                    <li>Attract suitable candidates towards the company. </li>
                                    <li>Gather all required details and prepare customized plan for recruitment. </li>
                                    <li>Shortlist right candidates.</li>
                                    <li>Verification of candidates regarding qualification and work experience. </li>
                                    <li>Get the candidate on-board.</li>
                                    <li>Deploy candidate</li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="recruitmentrightside">
                        <div className="recruitmentrightcontent">
                            <h2>Contract to Hire</h2>
                            <p>Expert staffing consultants find the best candidates and reduce the talent hunting burden on companies.</p>
                            <hr className="recruitmentrightline"></hr>
                            <div className="recruitmentcardtable">
                                <ul>
                                    <li>Identify your talent needs</li>
                                    <li>Select from contract or temporary staff pool</li>
                                    <li>Hire on contract/temporary basis</li>
                                    <li>Evaluate performance of selected candidate</li>
                                    <li>Decide candidate’s cultural fit</li>
                                    <li>Offer him a permanent job position</li>
                                    <li>Get talent transferred to company’s payroll</li>
                                
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}
