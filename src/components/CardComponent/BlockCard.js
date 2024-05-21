import React from 'react'
import './BlockCard.scss';




function BlockCard(props) {
    return (
        <div className='blockCardMain'>
            <div className='blockContainer'>
                <div className='blockContent'>
                    <img className="blockImage" src={props.image}></img>
                    <div className='shimmerView'>
                        <h1>{props.number}</h1>
                        <div className='shimmerText'>
                            <h2>{props.title}</h2>
                            <h3>{props.description}</h3>
                        </div>
        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BlockCard
