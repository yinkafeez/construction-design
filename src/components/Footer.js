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
            <Row className="footer-row">
                <Col xs={6} md={3} className="footer-col">
                    <div className="footer-col-title"> CONSTRUCTION </div>
                    <div className="footer-col-sub-title"> You will find your next home and value with us </div>
                    <Row className="footer-col-row">
                        <Col xs={4}>
                            <FiFacebook className="footer-col-one-row-icon" />
                        </Col>
                        <Col xs={4}>
                            <FiTwitter className="footer-col-one-row-icon" />
                        </Col>
                        <Col xs={4}>
                            <FiInstagram className="footer-col-one-row-icon" />
                        </Col>
                    </Row>
                </Col>

                <Col xs={6} md={3} className="footer-col">
                    <p className="footer-title"> Resources </p>
                    <p className="footer-item"> Our Agents </p>
                    <p className="footer-item"> Member Stories </p>
                    <p className="footer-item"> Value </p>
                    <p className="footer-item"> Free Trial </p>
                </Col>

                <Col xs={6} md={3} className="footer-col">
                    <p className="footer-title"> Company </p>
                    <p className="footer-item"> Partnership </p>
                    <p className="footer-item"> Term of Use </p>
                    <p className="footer-item"> Privacy </p>
                    <p className="footer-item"> Site Map </p>
                </Col>

                <Col xs={6} md={3} className="footer-col">
                    <p className="footer-title"> Get In Touch </p>
                    <div className="footer-input-div">
                        <input 
                            type="text"
                            placeholder="Enter your mail"
                            className="footer-input"
                        />
                        <BsArrowRight className="footer-icon" />
                    </div>
                </Col>
            </Row>

            <div className="footer-copyright-div">
                Copyright Construction.com, All rights reserved
            </div>
        </Container>
    )
}
export default Footer