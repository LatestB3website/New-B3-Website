import React, { Component } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import webdevelop from '../../assets/images/webdevloper.png'
import MobileDevelopment from '../../assets/images/Mobile Development.png'

export default class SplitCard extends Component {
    render() {
        return (
            <div className="flex flex-col items-center  h-auto bg-red-500 ">
              <div className="mx-auto w-11/12 mt-4 relative">
              {/* <div className="absolute left-10 top-20 z-10 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 p-6 rounded-xl hover:-translate-y-6 transition-all duration-500 mb-20">
        Web Development
    </div> */}
    <div className="absolute left-10 top-12  z-10  bg-cover bg-center  justify-center shadow-lg  lg:h-72 w-72 lg:w-1/4  rounded-xl hover:-translate-y-6 transition-all duration-500" >
    <div className=" bg-opacity-75  rounded-xl ">
        <img src={webdevelop}/>
    </div>
</div>


    <div className="bg-white w-[90%]  relative left-20 shadow-2xl p-6 rounded-xl mb-5 transform transition-all duration-300">
        <div className="flex flex-col items-end ">
            <div className="mt-8 text-center lg:text-left">
                {/* <h2 className="text-lg text-gray-600 mb-4">Web Development</h2> */}
                
                <p className="text-xl font-bold text-gray-900 pb-2 ">Web Development</p>
              
                {/* <hr className="border-t-2 bg-gray-200" /> */}
                <ul className="space-y-2 text-gray-700"type='circle'>
                <li>Strategic technical consulting and solution architecture</li>
                    <li>Research-driven implementation of cutting-edge technologies</li>
                    <li>Exploration of emerging tech trends and experimentation</li>
                    <li>Continuous refinement of existing tech stacks and team skill development</li>
                    <li>Intuitive design for seamless user interactions</li>
                    <li>Compelling content creation and storytelling</li>
                    <li>Rigorous code reviews and optimization</li>
                    {/* <li>End-to-end development and DevOps integration</li> */}
                    <li>Comprehensive testing and quality assurance protocols</li>
                    <li>Reliable delivery and ongoing maintenance support</li>

                </ul>
            </div>
        </div>
    </div>
</div>

<div className="mx-auto w-11/12  relative">
              <div className="absolute right-1 top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4  rounded-xl hover:-translate-y-6 transition-all duration-500">
              {/* <img src={MobileDevelopment}/> */}
    </div>

    <div className="bg-white w-[90%]  relative left-20 shadow-2xl p-6 rounded-xl  transform transition-all duration-300">
        <div className="flex flex-col items-start ">
            <div className="mt-8 text-center lg:text-left">
                {/* <h2 className="text-lg text-gray-600 mb-4">Web Development</h2> */}
                <p className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</p>
                {/* <hr className="border-t-2 bg-gray-200" /> */}
                <ul className="space-y-2 text-gray-700">
                <li>Strategic consulting for technical decisions and solution architecture</li>
                    <li>Research-driven implementation of innovative ideas</li>
                    <li>Utilization of leading-edge frameworks for intuitive design</li>
                    <li>Regular code reviews for quality assurance and optimization</li>
                    <li>Integrated development and DevOps practices for efficient workflows</li>
                    <li>Thorough testing and quality assurance procedures for reliability</li>
                    <li>Efficient delivery and ongoing maintenance support</li>
                    <li>Robust monitoring systems and proactive alert mechanisms</li>

                </ul>
            </div>
        </div>
    </div>
</div>

    <div className="mx-auto w-11/12  relative">
              <div className="absolute right-1 top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4  rounded-xl hover:-translate-y-6 transition-all duration-500">
              <img src={MobileDevelopment}/>
    </div>
      <div className="bg-white w-[90%]  relative left-20 shadow-2xl mt-4 p-6 rounded-xl  transform transition-all duration-300">
        <div className="flex flex-col items-start ">
            <div className="mt-8 text-center lg:text-left">
                {/* <h2 className="text-lg text-gray-600 mb-4">Web Development</h2> */}
                <p className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</p>
                {/* <hr className="border-t-2 bg-gray-200" /> */}
                <ul className="space-y-2 text-gray-700">
                <li>Strategic consulting for technical decisions and solution architecture</li>
                    <li>Research-driven implementation of innovative ideas</li>
                    <li>Utilization of leading-edge frameworks for intuitive design</li>
                    <li>Regular code reviews for quality assurance and optimization</li>
                    <li>Integrated development and DevOps practices for efficient workflows</li>
                    <li>Thorough testing and quality assurance procedures for reliability</li>
                    <li>Efficient delivery and ongoing maintenance support</li>
                    <li>Robust monitoring systems and proactive alert mechanisms</li>

                </ul>
            </div>
        </div>
    </div>
</div>


















</div>

            // </div> 
        );
    }
}

