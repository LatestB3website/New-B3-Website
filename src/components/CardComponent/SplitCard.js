import React, { Component } from 'react'
import './SplitCard.scss'

export default class SplitCard extends Component {
    render() {
        return (
            <div className="splitcard">
                <div className="flexbox">
                    <div className="leftside">
                        <div className="leftcontent">
                            <h2>Web Development</h2>
                            <p>Deploy leading edge web apps that get you predictability closer to innovation.</p>
                            <hr className="leftline"></hr>
                            <div className="cardtable">
                                <ul>
                                    <li>Consulting Technical Decision & Solution Architecture</li>
                                    <li>Research & Implementation</li>
                                    <li>Experiments on newer technologies </li>
                                    <li>Updates in existing technologies and train product teams </li>
                                    <li>Designing</li>
                                    <li>Content Creation</li>
                                    <li>Frequent code reviews </li>
                                    <li>Development & Dev-Ops enablement</li>
                                    <li>Testing & Quality Assurances</li>
                                    <li>Delivery & Maintainance</li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="rightside">
                        <div className="rightcontent">
                            <h2>Mobile App Development</h2>
                            <p>Mobile Applications, both on Native & Hybrid frameworks for handheld software development.</p>
                            <hr className="rightline"></hr>
                            <div className="cardtable">
                                <ul>
                                    <li>Consulting Technical Decision & Solution Architecture</li>
                                    <li>Research & Implementation</li>
                                    <li>Design using leading edge frameworks</li>
                                    <li>Frequent code reviews</li>
                                    <li>Development & Dev-Ops enablement</li>
                                    <li>Testing & Quality Assurances</li>
                                    <li>Delivery & Maintainance</li>
                                    <li>Monitoring & Alerts</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}
