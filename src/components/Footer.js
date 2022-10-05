import React from "react" 
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {BsArrowRight} from "react-icons/bs"
import Container from "react-bootstrap/Container"


function Footer() {
    return(
        <Container className="footer-container">
        <Row>
            <Col xs={3}>
                <h4 className="footer-title"> CONSTRUCTION </h4>
                <p className="footer-description"> You will find your next home and value with us </p>
                <Row>
                    <Col xs="4">
                        <p className="footer-icon-one"> 
                            <FiFacebook 
                                className="icon" 
                                style={{
                                    color:"white",
                                    width:"25px",
                                    height:"28px",
                                }} 
                            /> 
                        </p>
                    </Col>
                    <Col xs="4">
                        <p className="footer-icon-two">
                            <FiTwitter 
                                className="icon" 
                                style={{
                                    color:"#FAFBFF",
                                    width:"25px",
                                    height:"28px",
                                }} 
                            />  
                        </p>
                    </Col>
                    <Col xs="4">
                        <p className="footer-icon-three"> 
                            <FiInstagram 
                                className="icon" 
                                style={{
                                    color:"#FAFBFF",
                                    width:"25px",
                                    height:"28px",
                                }} 
                            /> 
                        </p>
                    </Col>
                </Row>              
            </Col>
            <Col xs={3}>
                <p className="footer-header"> Resources </p>
                <p className="footer-sub-heading"> Our Agents </p>
                <p className="footer-sub-heading"> Member Stories </p>
                <p className="footer-sub-heading"> Value </p>
                <p className="footer-sub-heading"> Free Trial </p>
            </Col>
            <Col xs={3}>
                <p className="footer-header"> Company </p>
                <p className="footer-sub-heading"> Partnership </p>
                <p className="footer-sub-heading"> Term of Use </p>
                <p className="footer-sub-heading"> Privacy </p>
                <p className="footer-sub-heading"> Site Map </p>
            </Col>
            <Col xs={3}>
                <p className="footer-header"> Get In Touch </p>
                <p className="footer-input"> <input placeholder="Enter your mail" /> <BsArrowRight className="footer-input-icon" />  </p>
            </Col>
        </Row>
        <Row className="footer-copyright-row">
            <p>Copyright Construction.com, All rights reserved</p>
        </Row>
        </Container>
    )
}
export default Footer