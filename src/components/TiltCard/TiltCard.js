import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import webdevelopment from '../../assets/images/webdevelopment.png'
import './TiltCard.scss';
import Tilt from 'react-parallax-tilt'
import { speed } from 'jquery';
export default class TiltCard extends React.Component {

    
    render() {
       
        return (
            <div className="cardMain" >
                <div className="cardContainer">
                    <Tilt className="parallax-effect-glare-scale"
                            perspective={500}
                            
                            scale={1.1}
                            gyroscope={true}
                            tiltMaxAngleX={30}
                            tiltMaxAngleY={30}
                            >
                    <div className="cardLayout">
                        <div className="cardContent">
                            {/* <h2 className="backText">01</h2> */}
                            <img className="cardImage"src={this.props.image}></img>
                            {/* <h3 className="title">Web Development</h3>
                            <p className="description">Lorem Ipsum pras oasca asadw wroaf afeela orla neeal fneame</p>
                            <p className="longDescription">Onsectetur adipiscing elit. Pellentesque varius, ante non tincidunt hendrerit, lorem nulla feugiat arcu, ac facilisis tortor lorem in odio. Duis tempus finibus dapibus.</p> */}
                        </div>
                    </div>
                    </Tilt>
                </div>
                
            </div>
            
        )
    }
}



// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// // import webdevelopment from '../../assets/images/webdevelopment.png'
// import IPS_e_Services from '../../assets/images/IPS_e_Services.jpg'

// import './TiltCard.scss';
// import Tilt from 'react-parallax-tilt'
// import { speed } from 'jquery';
// import { Grid } from '@material-ui/core';
// import { Row, Col, Container, ListGroupItem } from "react-bootstrap";
// let s;
// export default class TiltCard extends React.Component {
//   state = { data: null };
//   constructor(props) {

//     super(props);


//     this.state = {
//       error: null,
//       isLoaded: false,
//       data: []
//     }

//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//       .then(response => response.json())
//       // .then(data => this.setState({ data }));
//       // .then(data => this.setState({ postId: data}));
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             data: result
//           });
//         },
//         // error handler
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, data } = this.state;
//     data.forEach((index) => {
//       s = index;
//       // alert(s.name);

//     });

//     if (error) {
//       return (
//         <div className="col">
//           Error: {error.message}
//         </div>
//       );
//     } else if (!isLoaded) {
//       return (
//         <div className="col">
//           Loading...
//         </div>
//       );
//     } else {

//       // alert(s.name);

//       return (
//         <Grid container
//           direction="row"
//           alignContent="center"
//           alignItems="center"
//           wrap="wrap">

//           {data.map(el => {
//             return (


//               <Row xs={4} md={4}>
//                 <Col >

//                   <div className="cardMain" >
//                     <div className="cardContainer">
//                       <Tilt className="parallax-effect-glare-scale"
//                         perspective={500}
//                         // glareEnable={true}
//                         // glareMaxOpacity={0.45}
//                         scale={1.1}
//                         gyroscope={true}
//                         tiltMaxAngleX={30}
//                         tiltMaxAngleY={30}
//                       >
//                         <div className="cardLayout">
//                           <div className="cardContent">
//                             {/* <h2 className="backText">01</h2> */}
//                             <img className="cardImage" src={IPS_e_Services}></img>
//                             <h3 className="title">{el.name}</h3>
//                             <p className="description">{el.email}</p>
//                             <p className="longDescription">{el.email}</p>
//                           </div>
//                         </div>
//                       </Tilt>
//                     </div>

//                   </div>
//                 </Col>
//               </Row>

//             );
//           })}
//         </Grid>
//       )
//     }
//   }
// }


