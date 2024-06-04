import React, { Component } from "react";
import "./SplitCard.scss";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import Aos from "aos";
import webDevelopment from "../../assets/images/web development.png";
import javascript from "../../assets/images/java-script.png"
import reactlogo from "../../assets/images/react.png"
import nodelogo from "../../assets/images/node.png"
import javalogo from "../../assets/images/java.png"
import kotline from "../../assets/images/Kotlin_Icon.png"
import flutter from "../../assets/images/flutter.png"
import enterpriselogo from "../../assets/images/computerlogo.png"
import digital from "../../assets/images/digital.png"
import solution from "../../assets/images/solution.png"

export default class SplitCard extends Component {
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        {/* style={{ backgroundImage: `url(${webDevelopment})` }} */}
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="mx-auto w-10/12 mt-4 relative containt"
        >
          {/* <div className="absolute left-10 top-20 z-10 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 p-6 rounded-xl hover:-translate-y-6 transition-all duration-500">
        Web Development
    </div> */}

          <div
            
            className="absolute   left-10 top-10 z-10  bg-cover bg-center text-white text-2xl font-bold flex  customborder bg-blue-500 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 hover:-translate-y-6 rounded transition-all duration-500"
            web Development 
          >
            <div
              className=" bg-opacity-75  rounded  "
              
            >
            
            </div>
          </div>

          <div className="bg-white w-[90%]  relative left-20 shadow-2xl  p-6 rounded-xl mb-5 transform transition-all duration-300 border hover:border-blue-700">
            <div className="flex  h-80 pl-72 flex-col items-center     ">
              <div className=" h-full  flex justify-between w-full ">
                {/* <h2 className="text-lg text-gray-600 mb-4">Web Development</h2> */}

                {/* <hr className="border-t-2 bg-gray-200" /> */}
                <div className="pl-2 flex flex-col justify-between ">
                  <h4 className="heading smallcontaint">Web Development</h4>
                  <p className="text-gray-700 font ">
                    We offer custom web design and development, creating
                    responsive and user-friendly interfaces tailored to your
                    needs. We build secure and scalable architectures, ensuring
                    your website is robust and future-proof. Regular updates and
                    maintenance are provided to keep your site running smoothly,
                    accompanied by comprehensive testing for quality assurance.
                    
                  </p>
                  <div className="flex  justify-end items-end gap-4">
                    <img src={javascript} className="h-10 " />
                    <img src={reactlogo} className="h-10"/>
                    <img src={nodelogo} className="h-10"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="mx-auto w-10/12 relative containt "
        >
          <div className="absolute right-[-1.75rem] top-10 z-10 bg-blue-500 customborder text-white text-2xl font-bold flex items-center  text-center justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 p-6 rounded hover:-translate-y-6 transition-all duration-500"></div>
           
          <div className="bg-white w-[90%]  relative left-20  shadow-2xl p-6 rounded-2xl  transform transition-all duration-300 border hover:border-blue-700">
            <div className="flex flex-col h-80 items-start">
              
              <h4 className="heading smallcontaint pl-6">Mobile App Development</h4>
              <p className="text-gray-700 h-72 font p-6 w-[74%] ">
                We provide custom mobile app design and development, ensuring
                user-friendly interfaces and intuitive UX.
                Our solutions offer cross-platform compatibility and regular updates and
                maintenance. We implement robust security measures and seamless
                integration with backend systems.
              </p>
              <div className="flex justify-end items-end gap-4 ">
                <img src={javalogo} className="h-12 "/>
                <img src={kotline} className="h-9 image "/>
                <img src={flutter} className="h-9 image "/>
                
                

                {/* <img src={} className="h-12"/> */}
              </div>
              {/* </div> */}
            </div>
          </div>
          
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="mx-auto w-10/12  relative containt"
        >
          <div className="absolute left-10 top-16 z-10 customborder bg-blue-500 bg-cover bg-center  text-white text-2xl font-bold flex items-center justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 p-6 rounded hover:-translate-y-6 transition-all duration-500">
            <div className="bg-blue-500  bg-opacity-75 p-6 rounded"></div>
          </div>

          <div className="bg-white  w-[90%] h-96 relative left-20 shadow-2xl  p-4 rounded-xl mb-5 mt-5 transform transition-all duration-300 border hover:border-blue-700">
            <div className="flex flex-col items-end ">
              <div className="mb-10 ">
                {/* <h2 className="text-lg text-gray-600 mb-4">Web Development</h2> */}

                {/* <hr className="border-t-2 bg-gray-200" /> */}
                <h4 className=" text-center heading smallcontaint pl-60 pr-40 ">
                  
                  Enterprise Application Solutions
                </h4>
                <div className="pl-2  flex justify-center   ">
                  <p className="text-gray-700 font h-72 p-6 pl-80  w-[100%] line-break:anywhere">
                    We provide strategic consulting for enterprise application
                    architecture and the implementation of innovative enterprise
                    solutions. Our approach includes the utilization of scalable
                    and intuitive design frameworks, regular code reviews for
                    quality and optimization, and integrated DevOps for
                    efficient workflows. 
                  </p>
                  <div className="flex justify-end items-end gap-4 ">
                <img src={enterpriselogo} className="h-10  "/>
                <img src={digital} className="h-10 "/>
                <img src={solution} className="h-10  "/>

                
                

                {/* <img src={} className="h-12"/> */}
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
