import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import {BsArrowRight} from "react-icons/bs"
import IMG19 from "../images/IMG19.png"
import IMG20 from "../images/IMG20.png"
import IMG21 from "../images/IMG21.png"
import IMG22 from "../images/IMG22.png"
import IMG23 from "../images/IMG23.png"

import Footer from "./Footer"

function Contact() {
    return (
        <>
            {/* section one row */}

           <Row className="contact-sec-one-header-row">
                    <h6> Message from CEO </h6>
                    <h1><span style={{fontSize:"80px",color:"white"}}>" </span></h1>
                    <p>
                        As President & CEO of this construction & rebuilding firm, I firmly believe that 
                        if we can achieve a place in the heart & mind of our customers as a provider of 
                        innovative solutions for integrated communities that suit every need and fulfill 
                        all dreams, the possibilities for the growth of Delta will be unlimited no matter 
                        how challenging the real estate environment. <br />

                        Delta is a business truly capable of benefiting and profiting both society and our 
                        shareholders. <br /> <br />

                        I would like to take this opportunity to pledge that I and the team will endeavor 
                        to devote our full efforts to exceed our customers' expectations & fully satisfy 
                        their needs and requirements.
                    </p>
                    <h2><span style={{fontSize:"80px",color:"white"}}>"</span></h2>
           </Row>

           {/* section two */}
           <Row className="contact-sec-two-row">
                <h6>Contact Us</h6>
                <p>
                    We are always available to attend to your needs and request at any time of the <br />
                    day to ensure you get the best services delivered
                </p>
           </Row>

            {/* Section Three */}
            <Container>
                <Row>
                    <Col className="contact-sec-three-input-col">
                        <div><input placeholder="Name" className="contact-sec-three-name-input" /></div>
                        <div><input placeholder="Email" className="contact-sec-three-email-input" /></div>
                        <div><input placeholder="Subject" className="contact-sec-three-subject-input" /></div>
                        <div><textarea placeholder="Message" className="contact-sec-three-message-input" /></div>
                        <div><Button className="contact-sec-three-button">Send Message</Button></div>
                    </Col>
                    <Col className="contact-sec-three-map-col">
                        <div className="contact-sec-three-map-img-one"> <img src={IMG19} width={30} /> <span>Ausralia</span> </div>
                        <div className="contact-sec-three-map-img-two"> <img src={IMG20} width={30} /> <span>Germany</span> </div>
                        <div className="contact-sec-three-map-img-three"> <img src={IMG21} width={30} /> <span>Pakistan</span> </div>
                        <div className="contact-sec-three-map-img-four"> <img src={IMG22} width={30} /> <span>Brazil</span> </div>
                        <div className="contact-sec-three-map-img-five"> <img src={IMG23} width={30} /> <span>Canada</span> </div>
                    </Col>
                </Row>
            </Container>
            
            {/* Section four */}
            <Container>
                <Row className="contact-sec-four-row">
                    <h4>Latest Blogs</h4>
                    <p>
                        Our blog is constantly filled with latest informations and development around <br />
                        constructions, for awareness and it answer all manner od enquiries
                    </p>
                </Row>
            </Container>
            
            {/* Section five */}
            <Container>
                <Row className="contact-sec-five-row">
                    <Col className="contact-sec-five-col-one">
                        <h6>Lands and its properties</h6>
                        <p>The neccessity of land cannot be over said....</p>
                        <div><Button className="contact-sec-five-btn">Read More</Button></div>
                    </Col>
                    <Col className="contact-sec-five-col-two">
                        <h6>Construction requirements</h6>
                        <p>Requirments are important choosing plan..</p>
                        <div><Button className="contact-sec-five-btn">Read More</Button></div>
                    </Col>
                </Row>
            </Container>
            {/* Section six */}
            <Container>
                <Row className="contact-sec-six-row">
                    <h2>Subscribe To Our Newsletter</h2>
                    <p>
                        Our newsletter is to update is frequently on every information and send your <br />
                        updates on our products and services
                    </p>
                    <div><Button className="contact-sec-six-btn">SUBSCRIBE <BsArrowRight className="contact-button-icon" /></Button></div>
                </Row>
            </Container>

            {/* Footer */}
            <Footer />
        </>
    )
}
export default Contact