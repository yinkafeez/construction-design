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
        {/* SECTION ONE */}
            <Container fluid className="contact-container">
                <div className="contact-top-container-div">
                    <Row className="contact-top-container-row">
                        <Col xs={1}></Col>
                        <Col xs={10} className="contact-top-container-col">
                            <div className="contact-top-title">
                                Message from CEO
                            </div>
                            {/* <div className="contact-top-info"> */}
                                <Row>
                                    <Col xs={1} className="contact-top-info-top-quote-col">
                                        <span className="contact-top-info-top-quote">"</span>
                                    </Col>
                                    <Col xs={10} className="contact-top-info-text-col">
                                    <span className="contact-top-info-text">
                                        As President & CEO of this construction & rebuilding firm, I firmly believe that if 
                                        we can achieve a place in the heart & mind of our customers as a provider of 
                                        innovative solutions for integrated communities that suit every need and fulfill all 
                                        dreams, the possibilities for the growth of Delta will be unlimited no matter how 
                                        challenging the real estate environment.<br />

                                        Delta is a business truly capable of benefiting and profiting both society and our 
                                        shareholders.<br /><br />

                                        I would like to take this opportunity to pledge that I and the team will endeavor to 
                                        devote our full efforts to exceed our customers' expectations & fully satisfy their 
                                        needs and requirements.
                                    </span>
                                    </Col>
                                    <Col xs={1} className="contact-top-info-bottom-quote-col">
                                        <span className="contact-top-info-bottom-quote">"</span>
                                    </Col>
                                </Row>
                            {/* </div> */}
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </div>
            </Container>

            {/* SECTION TWO */}
            <Container fluid className="contact-form-container">
                <div className="contact-form-header-div">
                    <h3 className="contact-form-title"> Contact Us </h3>
                    <p className="contact-form-description">
                        We are always available to attend to your needs and request at any time of the
                    </p>
                    <p className="contact-form-description">
                        day to ensure you get the best services delivered
                    </p>
                </div>
                {/* form and map row */}
                <Row className="form-map-row">
                    <Col xs={12} md={4} className="form-col">
                        <input
                            type="text"
                            placeholder="Name"
                            className="name-input"
                        /><br />
                        <input
                            type="text"
                            placeholder="Email"
                            className="email-input"
                        /><br />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="subject-input"
                        /><br />
                        <textarea
                            type="text"
                            placeholder="Message"
                            className="message-input"
                        /><br /><br />
                        <Button className="form-btn"> Send Message </Button>
                    </Col>
                    <Col xs={12} md={8} className="map-col">
                        <div className="australia-container-div">
                            <img src={IMG19} className="map-img" /> Australia
                        </div>
                        <div className="germany-container-div">
                            <img src={IMG20} className="map-img" /> Germany
                        </div>
                        <div className="parkistan-container-div">
                            <img src={IMG21} className="map-img" /> Parkistan
                        </div>
                        <div className="brazil-container-div">
                            <img src={IMG22} className="map-img" /> Brazil
                        </div>
                        <div className="canada-container-div">
                            <img src={IMG23} className="map-img" /> Canada
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* SECTION THREE */}
            <Container fluid className="blog-container">
                <div className="blog-title-div">
                    <h3 className="blog-title"> Latest Blogs </h3>
                    <p className="blog-description">
                        Our blog is constantly filled with latest informations and development around
                    </p>
                    <p className="blog-description">
                        constructions, for awareness and it answer all manner od enquiries
                    </p>
                </div>

                {/* Blog Headline row */}
                <Row className="blog-headline-row">
                    <Col xs={6} className="blog-headline-col-one">
                        <div>
                            <p className="blog-headline-title"> Lands and its properties </p>
                            <p className="blog-headline-details"> The neccessity of land cannot be over said.... </p>
                            <Button className="blog-headline-btn"> Read More </Button>
                        </div>
                    </Col>
                    <Col xs={6} className="blog-headline-col-two">
                        <div>
                            <p className="blog-headline-title"> Construction requirements </p>
                            <p className="blog-headline-details"> Requirments are important choosing plan.. </p>
                            <Button className="blog-headline-btn"> Read More </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* SECTION FOUR */}
            <Container fluid className="subscribe-container">
                <div className="subscribe-div">
                    <h3 className="subscribe-title">
                        Subscribe To Our Newsletter
                    </h3>
                    <p className="subscribe-description"> Our newsletter is to update is frequently on 
                    every information and send your updates  
                    </p>
                    <p className="subscribe-description">  
                        on our products and services our products and services 
                    </p>
                    <Button className="subscribe-button"> SUBSCRIBE </Button>
                </div>
            </Container>
            {/* Footer */}
            <Footer />
        </>
    )
}
export default Contact