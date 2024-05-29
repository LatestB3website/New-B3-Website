import React, { Component } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import webdevelop from '../../assets/images/webdevloper.png'
import MobileDevelopment from '../../assets/images/Mobile Development.png'

export default class SplitCard extends Component {
    render() {
        return (
            <div className="flex flex-col items-center h-auto">
              
                {/* First Container */}
                <div className="w-[75%] flex justify-center relative">
                    <div className='font-extrabold hover:scale-105 translate-all duration-500 h-3/4 w-[20%] mt-10 shadow-2xl flex justify-center items-center text-center absolute left-0'>
                        WE <br/> DESIGN
                    </div>
                    <div className="absolute left-[90%] top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 rounded-xl hover:-translate-y-6 transition-all duration-500">
                        <img src={webdevelop} className='h-full rounded-xl'/>
                    </div>

                    <div className="bg-white w-[90%] relative left-[16%] shadow-2xl p-6 rounded-xl transform transition-all duration-300">
                        <div className="flex flex-col items-start">
                            <div className="mt-8 pl-6 text-center lg:text-left">
                                <p className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</p>
                                <ul className="space-y-2 text-gray-700 ">
                                    <li className='hover:font-bold'>Strategic consulting for technical decisions and solution architecture</li>
                                    <li className='hover:font-bold'>Research-driven implementation of innovative ideas</li>
                                    <li className='hover:font-bold'>Utilization of leading-edge frameworks for intuitive design</li>
                                    <li className='hover:font-bold'>Regular code reviews for quality assurance and optimization</li>
                                    <li className='hover:font-bold'>Integrated development and DevOps practices for efficient workflows</li>
                                    <li className='hover:font-bold'>Thorough testing and quality assurance procedures for reliability</li>
                                    <li className='hover:font-bold'>Efficient delivery and ongoing maintenance support</li>
                                    <li className='hover:font-bold'>Robust monitoring systems and proactive alert mechanisms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Container */}
                <div className="w-[75%] flex justify-center relative mt-10">
                    <div className='font-extrabold hover:scale-105 translate-all duration-500 h-3/4 w-[20%] mt-10 shadow-2xl flex justify-center items-center text-center absolute right-0'>
                    WE <br/> DEVELOP
                    </div>
                    <div className="absolute right-[90%] top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 rounded-xl hover:-translate-y-6 transition-all duration-500">
                        <img src={MobileDevelopment} className='h-full rounded-xl'/>
                    </div>

                    <div className="bg-white w-[90%] relative right-[16%] shadow-2xl p-6 rounded-xl transform transition-all duration-300">
                        <div className="flex flex-col items-end">
                            <div className="mt-8 pl-6 text-center lg:text-left ">
                                <p className="text-xl font-bold text-gray-900 mb-4">Web Development</p>
                                <ul className="space-y-2 text-gray-700 ">
                                    <li>Strategic technical consulting and solution architecture</li>
                                    <li>Research-driven implementation of cutting-edge technologies</li>
                                    <li>Exploration of emerging tech trends and experimentation</li>
                                    <li>Continuous refinement of existing tech stacks and team skill development</li>
                                    <li>Intuitive design for seamless user interactions</li>
                                    <li>Compelling content creation and storytelling</li>
                                    <li>Rigorous code reviews and optimization</li>
                                    <li>Comprehensive testing and quality assurance protocols</li>
                                    <li>Reliable delivery and ongoing maintenance support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

               

                {/* Third Container */}
                <div className="w-[75%] flex justify-center relative m-5">
                    <div className='font-extrabold hover:scale-105 translate-all duration-500 h-3/4 w-[20%] mt-10 shadow-2xl flex justify-center items-center text-center absolute left-0'>
                        WE <br/> DELIVER
                    </div>
                    <div className="absolute left-[90%] top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 rounded-xl hover:-translate-y-6 transition-all duration-500">
                        <img src={webdevelop} className='h-full rounded-xl'/>
                    </div>

                    <div className="bg-white w-[90%] relative left-[16%] shadow-2xl p-6 rounded-xl transform transition-all duration-300">
                        <div className="flex flex-col items-start">
                            <div className="mt-8 pl-6 text-center lg:text-left">
                                <p className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</p>
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
        );
    }
}
