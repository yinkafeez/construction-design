import React from "react";
import Footer from "./Footer"
import Category from "./Category"
import CompanyAcquirement from "./CompanyAcquirement"
import Enginner from  "./Enginner"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button"
import IMG2 from "../images/IMG2.png"
import {useNavigate} from "react-router-dom"
import Container from "react-bootstrap/Container"


function Homepage() {

    const navigate = useNavigate()

    function contactBtnOnclick() {
        navigate("/contact")
    }

    return(
        <>
            <Container fluid className="homepage-container">
                {/* section one */}
                <Row className="sec-one-row">

                    <Col xs={5} className="sec-one-col">
                        <div className="sec-one-title"> CONSTRUCTION </div>
                        <div className="sec-one-sub-title"> <b>Masters</b>  of  Beauty, Constitency and <b>Quality</b>. </div>
                        <div className="sec-one-description"> 
                            Great Buildings are what makes the home glad and fulfilled to further 
                            broaden her great imaginations and also come to reality 
                        </div>

                        <Row className="sec-one-btn-row">
                            <Col xs={6} md={4} className="sec-one-btn-col">
                                <Button className="sec-one-explore-btn"> Explore </Button>
                            </Col>
                            <Col xs={6} md={4} className="sec-one-btn-col">
                                <Button className="sec-one-contact-btn" onClick={contactBtnOnclick}> Contact Us </Button>
                            </Col>
                            <Col xs={0} md={4}></Col>
                        </Row>

                        <Row className="sec-one-statistic-row">
                            <Col xs={4} className="sec-one-project-col">
                                <div className="sec-one-project-cover"></div>

                                <div className="sec-one-project-number-div">
                                    <span className="sec-one-project-number"> 34,345 </span>
                                    <div className="sec-one-project-title"> Projects Done </div>
                                </div>
                            </Col>
                            <Col xs={4} className="sec-one-building-col">
                                <div className="sec-one-building-cover"></div>
                                
                                <div className="sec-one-building-number-div">
                                    <span className="sec-one-building-number"> 16,500 </span>
                                    <div className="sec-one-building-title"> Buildings Done </div>
                                </div>
                            </Col>
                            <Col xs={4} className="sec-one-employee-col">
                                <div className="sec-one-employee-cover"></div>
                                
                                <div className="sec-one-employee-number-div">
                                    <span className="sec-one-employee-number"> 400+ </span>
                                    <div className="sec-one-employee-title"> Total Employees </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/* col-two */}
                    <Col xs={7} className="sec-one-col">
                        <Row className="nav-container">
                            <Col xs={2} className="nav-side-cover-col"> <div className="nav-side-cover"></div> </Col>
                            <Col xs={10} className="nav-img-link-col">
                                <div className="nav-img-link-div">
                                    <Row className="nav-link-row">
                                        <Col xs={2} sm={3}> Home </Col>
                                        <Col xs={4} sm={3}> About  Us </Col>
                                        <Col xs={2} sm={3}> Service </Col>
                                        <Col xs={3} sm={3}> Projects </Col>
                                    </Row>
                                    <img src={IMG2} alt="" className="nav-img" />
                                </div>
                                <div className="nav-bottom-cover"></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Category */}
            <Category />

            {/* CompanyAcquirement */}
            <CompanyAcquirement />

            {/* Enginner */}
            <Enginner />

            {/* Footer */}
            <Footer />
        </>
    )

}

export default Homepage