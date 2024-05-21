import React, { Component } from 'react'
import WebDesign from '../../assets/images/webdesign.jpg';
import './ExpandableCard.scss'

export default class ExpandableCard extends Component {
    render() {
        return (
            <div className="expandCard">
                    <div className="expandCardImage">
                        {/* <img src={this.props.image}></img> */}
                        <img src={WebDesign}></img>
                    </div>
                    <div className="expandCardContent">
                    <div class="expandCardCategory">{this.props.category}</div>
                    <div class="expandCardBox">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.subtitle}</h2>
                        <p className="hidden hide-text">{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
