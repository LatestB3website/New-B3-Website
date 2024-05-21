import React from "react";
import { Box, Button } from "@mui/material";
import Services from "./Services.css";
import Tilt from "react-parallax-tilt";
import pc from "../../assets/images/pc.jpg";

const BoxCard = (props) => {
  return (
    <Tilt>
      <Box style={{ paddingRight: "30px" }}>
        <div>
          <div className="card">
            <div className="content">
              <h3>{props.serviceName}</h3>
              <div>
                <p>{props.serviceDescription}</p>
                <a href="#">Read More</a>
                <br />
                <br />
                <br />

                <div>
                  <div className="imagebox-one">
                    <img
                      width="230"
                      height="210"
                      className=" ls-is-cached lazyloaded"
                      src={pc}
                      data-src={props.imgurl}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Tilt>
  );
};

export default BoxCard;
