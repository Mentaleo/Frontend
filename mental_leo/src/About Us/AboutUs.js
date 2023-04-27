import React from "react";
import "./About.css"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import image1 from './image1.jpg';

const About = () => {

    return (

        <div style={{ backgroundColor: '#bdbdbd', paddingTop: "10vh" }} id="aboutus">

            <h1 style={{ color: "#26c6da", backgroundColor: "#14212e", fontFamily: 'BlinkMacSystemFont' }}>::ABOUT US:: </h1>

            <p style={{ textAlign: "left",fontSize:"15px"}}><b>
                Welcome to our mental health project. We are a team of dedicated individuals with a keen interest in
                data science who are passionate about promoting mental health and wellness.

                After understanding the challenges of mental health struggles, me and my team have come up with 
                a "Mental Health Project" which will help you decide whether to take mental health treatment or not.

                We believe that everyone deserves access to high-quality mental health care and support, regardless of their background 
                or circumstances. We are dedicated to making a positive impact on the mental health of individuals and communities. 
                We invite you to join us on this journey towards better mental health and wellness.<br></br>

                
            </b></p>
            <p style={{ textAlign: "left", fontSize: "20px" }}><b>Here is the contact details of our team.Feel free to connect with us anytime.</b></p>
            <div className="container">

                <div className="person">
                    <div><img src={image1} alt="Person 1" height={"250px"} width={"250px"}/></div>
                    <h2 style={{fontFamily: 'BlinkMacSystemFont' }}>BIYATRA GHOSH</h2>
                    <a href="mailto:biyatraghosh13@gmail.com" style={{ color: '#BE0027',  lineHeight: '4.0' }}>
                        <FaEnvelope /> Email
                    </a><br></br>
                    <a href="https://www.linkedin.com/in/biyatra-ghosh-b14128208" style={{ color: '#0C4E98' }}>
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>

                <div className="person">
                    <img src="person2.jpg" alt="Person 2" />
                    <h2 style={{ fontFamily: 'BlinkMacSystemFont' }}>HARSHA PATI</h2>
                    <a href="mailto:harshapati896@gmail.com" style={{ color: '#BE0027',  lineHeight: '4.0' }}>
                        <FaEnvelope /> Email
                    </a><br></br>
                    <a href="https://www.linkedin.com/in/harsha-pati-984298200" style={{ color: '#0C4E98' }}>
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>

                <div className="person">
                    <img src="image1.jpg" alt="Person 3" />
                    <h2 style={{ fontFamily: 'BlinkMacSystemFont' }}>TAPABRATA ROY</h2>
                    <a href="mailto:tapabrataroy675@gmail.com" style={{ color: '#BE0027', lineHeight: '4.0' }}>
                        <FaEnvelope /> Email
                    </a><br></br>
                    <a href="https://www.linkedin.com/in/tapabrata-roy-90981a211" style={{ color: '#0C4E98' }}>
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>

            </div>

        </div>
    );

};

export default About;