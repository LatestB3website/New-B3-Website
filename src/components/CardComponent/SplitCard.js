import React, { Component } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import webdevelop from '../../assets/images/webdevloper.png'
import Aos from 'aos';
import MobileDevelopment from '../../assets/images/Mobile Development.png'
import './SplitCard.scss'
export default class SplitCard extends Component {
    render() {
        return (
            <div className="flex flex-col items-center h-auto gradient-background ">

                {/* First Container */}
                <div className="w-[60%] flex justify-center relative mt-5 ">
                    <div className="absolute left-[90%] top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 rounded-xl hover:-translate-y-6 transition-all duration-500">
                        <img src={webdevelop} className='h-full rounded-xl' />
                    </div>

                    <div className="bg-(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%) w-[90%] relative left-[16%] shadow-2xl p-6 rounded-xl transform transition-all duration-300">
                        <div className="flex flex-col items-start">
                            <div className="mt-8 pl-6 text-center lg:text-left">
                                <p className="text-xl font-bold text-white mb-4">Mobile App Development</p>
                                <ul className="space-y-2 text-white">
                                <li>Custom mobile app design and development</li>
                                <li>User-friendly interfaces and intuitive UX</li>
                                <li>Cross-platform compatibility</li>
                                <li>Regular updates and maintenance</li>
                                <li>Robust security measures</li>
                                <li>Seamless integration with backend systems</li>
                                <li>Comprehensive testing for reliability</li>
                                <li>Performance monitoring and optimization</li>






                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Container */}
                <div className="w-[60%] flex justify-center relative mt-5">

              
                    <div className="absolute right-[90%] top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 rounded-xl hover:-translate-y-6 transition-all duration-500">
                        <img src={MobileDevelopment} className='h-full rounded-xl' />
                    </div>

                    <div className="bg-(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%) w-[90%] relative right-[16%] shadow-2xl p-6 rounded-xl transform transition-all duration-300">
                        <div className="flex flex-col items-end">
                            <div className="mt-8 pl-6 text-center lg:text-left ">
                                <p className="text-xl font-bold text-white mb-4">Web Development</p>
                                <ul className="space-y-2 text-white ">
                                


<li>Custom web design and development</li>
<li>Responsive and user-friendly interfaces</li>
<li>SEO optimization</li>
<li>Integration with third-party services</li>
<li>Secure and scalable architecture</li>
<li>Regular updates and maintenance</li>
<li>Comprehensive testing for quality assurance</li>
<li>Performance monitoring and optimization</li>
                                

                               </ul>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Third Container */}
                <div className="w-[60%] flex justify-center relative m-5">
                    
                    <div className="absolute left-[90%] top-10 z-10 justify-center shadow-lg h-72 lg:h-72 w-72 lg:w-1/4 rounded-xl hover:-translate-y-6 transition-all duration-500 ">
                        <img src={webdevelop} className='h-full rounded-xl' />
                    </div>

                    <div className="bg-(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%) w-[90%] relative left-[16%] shadow-2xl p-6 rounded-xl transform transition-all duration-300">
                        <div className="flex flex-col items-start">
                            <div className="mt-8 pl-6 text-center lg:text-left">
                                <p className="text-xl font-bold text-white mb-4">Enterprise Application Solutions</p>
                                <ul className="space-y-2 text-white">
                                <li>Strategic consulting for enterprise application architecture</li>
                                <li>Implementation of innovative enterprise solutions</li>
                                <li>Utilization of scalable and intuitive design frameworks</li>
                                <li>Regular code reviews for quality and optimization</li>
                                <li>Integrated DevOps for efficient workflows</li>
                                <li>Thorough testing for enterprise reliability</li>
                               <li>Timely delivery and ongoing maintenance support</li>
                                <li>Advanced monitoring and proactive alerts</li>







                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
