import React from 'react';
import BoxCard from './BoxCard';
import AOS from 'aos';
import Header from '../../components/Header/header';
import Footer from '../Footer/footer';

// ..
AOS.init();
const Service = (props) => {

    return (

        <div style={{ backgroundColor: '#0060B5', paddingTop: '80px' }}>

            <div className='servicediv' >

                <Header textColor={"white"} backgroundColor={"#0060B5"}></Header>
                <div  >
                    <div className='servicecontainer'>
                        {/* #000050 */}
                        <br />
                        <br />
                        <br />
                        <br />

                        <div data-aos="fade-up" data-aos-duration="4000" style={{ display: 'inline-flex', textAlign: 'justify' }}>
                            <BoxCard serviceName='Web Development' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                            <BoxCard serviceName='IOT' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                            <BoxCard serviceName='Andriod' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                        </div>
                        <br />
                        <div data-aos="fade-up" data-aos-duration="1000" style={{ display: 'inline-flex', textAlign: 'justify' }}>
                            <BoxCard serviceName='Web Development' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                            <BoxCard serviceName='IOT' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                            <BoxCard serviceName='Andriod' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                        </div>
                        <br />
                        <div data-aos="fade-up" data-aos-duration="1000" style={{ display: 'inline-flex', textAlign: 'justify' }} >
                            <BoxCard serviceName='Web Development' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                            <BoxCard serviceName='IOT' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />
                            <BoxCard serviceName='Andriod' serviceDescription='uyduyfbgydgfygfydgfduybfudyybuydbyudbcyubcyubdcyubycubyudbcuydbcuydbcuybc' />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Service;
