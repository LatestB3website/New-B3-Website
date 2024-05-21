import React from 'react'
import './Careers.css'

const Circle = (props) => {
  return (
    <div>

      <div className="imgs img-4">
        <div className="wrap-4">
          <div className="infos info-4">
            <div className="info-4-front"></div>
            <div className="info-4-back">
              <h3>{props.title}</h3>
              <br />
              <p>{props.backgroundDiscription}</p>
              <a>any links for discription</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Circle








