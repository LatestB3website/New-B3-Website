import React ,{ useState } from 'react';
import './Contact.scss';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Maps from '../Map/Maps'


const Contact = () => {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {

        const isEmailValid = this.isValidEmail();
        this.setState(
          {
            isvalid: isEmailValid,
            message: isEmailValid
              ? "Email Address is Valid!"
              : "Email Address not valid!",
          },
          () => this.props.onEmailSubmit(this.state)
        );
        if (this.state.isvalid) {
            console.log(this.state);
          }

        if (fname && lname && email && phone && message) {
           // TODO - send mail
    
            setFName('');
            setLName('');
            setPhone('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
           
            alert('Please fill in all fields.');
        }
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    return (
       <div>
        <div className='contact-main'>
        <div className="con-div">
            <Header textColor={"white"} backgroundColor={"#0060B5"}></Header>
            <h1 class="conh1">Contact Us</h1>
            <p class="conp">Any question or remarks? Just Write us a message!</p>

            <div id="contact-container">
                <div className="contact-info">
                    <h4 class="conh4">Contact Information</h4>
                    <p class="conp1">Fill up the form and our team will get back to you within 24 hours.</p>
                    <div className="icon-text">
                        <i class="fa"><FaPhoneAlt /> </i>
                        <span>&nbsp;&nbsp;(+91) 022 65510355 </span>
                    </div>
                    <div className="icon-text">
                        <i class="fa"><FaEnvelope /></i>
                        <span> &nbsp;&nbsp;contact@bitbybitsolutions.co.in</span>
                    </div>
                    <div className="icon-text">
                        <i class="fa"><FaMapMarkerAlt /></i>
                        <span>&nbsp;912| 1st Floor| Building No 9 |Solitaire&nbsp;&nbsp;&nbsp;&nbsp; Corporate Park| Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093</span>
                    </div>
                    <div className="social-media">
                        <a href='/facebook' className="icon-circle">
                            <i className="iconfb"><FaFacebook /></i>
                        </a>
                        <a href='/instagram'  className="icon-circle">
                            <i className="iconinsta" ><FaInstagram /></i>
                        </a>
                        <a href='/linkedin' className="icon-circle">
                            <i className="iconin" ><FaLinkedin /></i>
                        </a>
                        <a href='/twitter' className="icon-circle">
                            <i className="icontw"><FaTwitter /></i>
                        </a>
                    </div>
                </div>
                <form>
                    <div className="col-2">
                        <div className="formgrp">
                            <lable className="fn">First Name</lable>
                            <input type="text"placeholder="Your First Name" value={fname} onChange={e => setFName(e.target.value)} ></input>
                        </div>
                        <div className="formgrp">
                            <lable className="ls">Last Name</lable>
                            <input type="text"placeholder="Your Last Name" value={lname} onChange={e => setLName(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="formgrp">
                            <lable className="ei">Email Id</lable>
                            <input type="text"placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="formgrp">
                            <lable className="pn">Phone Number</lable>
                            <input type="text"placeholder="Your Phone Number" value={phone} onChange={e => setPhone(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="formgrp one">
                        <lable className="ms"style={{padding:"10px",marginTop:"10px"}}>Write Your Message.</lable>
                        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="col-2">
                        <div className="formgrp one right">
                            <button className="primary"onClick={submit} style={{padding:"10px",marginTop:"10px"}}>Send Message</button>
                            {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
                               </div>
                        
                    </div>
                    
                </form>

              
            </div>

            
          
                   
            </div>
            <div>
            <div className='map-layout'><Maps/></div>
                
           </div>
        </div>
    <div className='contact-footer'>
    <Footer /></div>   
 
        </div>

    )
}
export default Contact;