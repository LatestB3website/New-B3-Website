import React, { Component } from "react";
import "../../components/CardComponent/FlipCard.css";
import Image1 from "../../assets/images/WhatWeDo.png";
import axios from "axios";
import { Grid } from "@mui/material";
import { Row, Col, Container, ListGroupItem } from "react-bootstrap";
const baseURL = "https://jsonplaceholder.typicode.com/users";
let s;

class Flipcard extends Component {
  state = { data: null };
  constructor(props) {
    super(props);

    // setPost()

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      // .then(data => this.setState({ data }));
      // .then(data => this.setState({ postId: data}));
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    data.forEach((index) => {
      s = index;
      // alert(s.name);
    });

    if (error) {
      return <div className="col">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="col">Loading...</div>;
    } else {
      // alert(s.name);

      return (
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
          wrap="wrap"
        >
          {data.map((el) => {
            return (
              <Row md={3}>
                <Col>
                  <div class="flipcontainer">
                    <div className="flip-container-card">
                      <div class="flip-card">
                        <h1>{el.name}</h1>

                        <img
                          src={Image1}
                          alt="Image1"
                          height="170"
                          width="170"
                        />

                        <p>{el.email} </p>

                        <div class="flipcard-flip">
                          <p>{el.email} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Grid>
      );
    }
  }
}
export default Flipcard;
