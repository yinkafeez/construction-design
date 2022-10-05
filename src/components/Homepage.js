import React from "react";
import Footer from "./Footer"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {BsThreeDotsVertical} from  "react-icons/bs"
import Button from "react-bootstrap/Button"
import IMG2 from "../images/IMG2.png"
import IMG3 from "../images/IMG3.png"
import IMG4 from "../images/IMG4.png"
import IMG5 from "../images/IMG5.png"
import IMG6 from "../images/IMG6.png"
import IMG7 from "../images/IMG7.png"
import IMG8 from "../images/IMG8.png"
import IMG9 from "../images/IMG9.png"
import IMG10 from "../images/IMG10.png"
import IMG11 from "../images/IMG11.png"
import IMG12 from "../images/IMG12.png"
import IMG13 from "../images/IMG13.png"
import IMG14 from "../images/IMG14.png"
import IMG15 from "../images/IMG15.png"
import IMG16 from "../images/IMG16.png"
import {useNavigate} from "react-router-dom"
import Container from "react-bootstrap/Container"


function Homepage() {

    const navigate = useNavigate()

    function contactBtnOnclick() {
        navigate("/contact")
    }

    return(
        <>
        
        <Container>
            {/* section one */}
            <Row className="top-row">
                <Col xs={6}>
                    <h6 className="header">CONSTRUCTION</h6>
                    <h6 className="top-title"><b>Masters</b> of  Beauty, Constitency and <b>Quality.</b></h6>
                    <p className="top-sub-title">
                        Great Buildings are what makes the home glad and fulfilled to further broaden 
                        her great imaginations and also come to reality
                    </p>
                    <Row className="btn-row">
                        <Col>
                            <div><Button className="explore-btn">Explore</Button></div>
                        </Col>
                        <Col>
                            <div><Button className="contact-btn" onClick={contactBtnOnclick}>Contact Us</Button></div>
                        </Col>
                    </Row>
                    <Row className="works-row">
                        <Col xs={4}>
                            <div>
                                <p className="project-img"> <img src={IMG3} alt="" /></p>
                                <p className="project-number">34,345</p>
                                <p className="project-title">Projects Done</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div>
                                <p className="building-img"> <img src={IMG4} alt="" /> </p>
                                <p className="building-number">16,500</p>
                                <p className="building-title">Buildings Done</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div>
                                <p className="employee-img"> <img src={IMG5} alt="" /> </p>
                                <p className="employee-number">400+</p>
                                <p className="employee-title">Total Employees</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <div> 
                        <Row>
                            <Col xs={2}>
                                <img src={IMG6} alt=""  className="top-side-img" />
                            </Col>
                            <Col xs={10}>
                                <img src={IMG2} alt=""  className="top-nav-img" />
                            </Col>
                        </Row>
                         
                    </div>
                    <Row className="top-nav-row">
                        <Col xs={3}> <p className="top-nav-home">Home</p> </Col>
                        <Col xs={3}> <p className="top-nav-about">About Us</p> </Col>
                        <Col xs={3}> <p className="top-nav-service">Service</p> </Col>
                        <Col xs={3}> <p className="top-nav-project">Projects</p> </Col>
                    </Row>
                    <div className="top-bottom-img"> <img src={IMG7} alt="" /> </div>
                </Col>
                
            </Row>

            {/* section two */}
            <div className="sec-two-category-div">
                <Row className="sec-two-row">
                    <Col> <div className="sec-two-div">CHASE <img src={IMG8} alt="" height={20} width={20} /> </div> </Col>
                    <Col> <div className="sec-two-div">ASANA <img src={IMG9} alt="" height={20} width={20} /> </div> </Col>
                    <Col> <div className="sec-two-div">BuzzFeed</div> </Col>
                    <Col> <div className="sec-two-div">Walmart</div> </Col>
                </Row>
            </div>

            {/* section three */}

            <Row className="sec-three-row">
                <Col xs={6}>
                    <div className="sec-three-description">
                        Great Buildings are what makes the home glad and fulfilled to further broaden her 
                        great imaginations and also come to reality.
                    </div>
                    <div className="sec-three-explore-btn-div"> <Button className="sec-three-explore-btn">Explore</Button> </div>
                </Col>
                <Col>
                    <div className="sec-three-product-reason">
                        Why you should choose us for your best construction experience
                    </div>
                </Col>
            </Row>

            {/* Section four */}
                <Row className="sec-four-row">
                    <Col xs={6} className="sec-four-img-col">
                        <div className="sec-four-img-div"> <img src={IMG10} alt="" /> </div>
                    </Col>
                    <Col xs={6} className="sec-four-description-col">
                        <div className="sec-four-description-div-one">
                            <Row>
                                <Col xs={1}>
                                    <p> <img src={IMG11} alt="" /> </p>
                                </Col>
                                <Col xs={1}>
                                    <h5>01</h5>
                                </Col>
                                <Col>
                                    <h6>
                                        Great Buildings are what makes the home glad and fulfilled to further 
                                        broaden her great imaginations and also come to reality
                                    </h6>
                                </Col>
                            </Row>
                            
                        </div>
                        <div className="sec-four-description-div-two">
                            <Row>
                                <Col xs={1}>
                                    <p> <img src={IMG12} alt="" /> </p>
                                </Col>
                                <Col xs={1}>
                                    <h5>02</h5>
                                </Col>
                                <Col>
                                    <h6>
                                        Great Buildings are what makes the home glad and fulfilled to further 
                                        broaden her great imaginations and also come to reality
                                    </h6>
                                </Col>
                            </Row>
                        </div>
                        <div className="sec-four-description-div-three">
                            <Row>
                                <Col xs={1}>
                                    <p> <img src={IMG13} alt="" /> </p>
                                </Col>
                                <Col xs={1}>
                                    <h5>03</h5>
                                </Col>
                                <Col>
                                    <h6>
                                        Great Buildings are what makes the home glad and fulfilled to further 
                                        broaden her great imaginations and also come to reality
                                    </h6>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                {/* section five */}
                <Row className="sec-five-row">
                    <h4> Our Best Enginners </h4>
                    <h6>
                        Great Buildings are what makes the home glad and fulfilled to further broaden <br />
                        her great imaginations and also come to reality
                    </h6>
                </Row>

                {/* section six */}
                <div className="sec-six-div">
                    <Row className="sec-six-row">
                        <Col xs="4" className="sec-six-col">
                            <h3><BsThreeDotsVertical /></h3>
                            <div> <img src={IMG14} alt="" width={95} height={105} /> </div>
                            <h4> Chris Tomas </h4>
                            <p> Canada, 1x </p>
                            <h5> 083-345-5647 </h5>
                            <h6> Christyu@gmail.com </h6>
                        </Col>
                        <Col xs="4"className="sec-six-col">
                            <h3><BsThreeDotsVertical /></h3>
                            <div> <img src={IMG15} alt="" width={95} height={105} /> </div>
                            <h4> Tomad Steven </h4>
                            <p> Michigan, 1x </p>
                            <h5> 067-335-5047 </h5>
                            <h6> Cusirty@gmail.com </h6>
                        </Col>
                        <Col xs="4"className="sec-six-col">
                            <h3><BsThreeDotsVertical /></h3>
                            <div> <img src={IMG16} alt="" width={95} height={105} /> </div>
                            <h4> John Tuyi </h4>
                            <p> Canada, 1x </p>
                            <h5> 083-345-5647 </h5>
                            <h6> Christyu@gmail.com </h6>
                        </Col>
                    </Row>
                </div>

                {/* Footer */}
                <Footer />

        </Container>






            {/* <Container className="container">
                
                <Row>
                   
                    <Col xs={6} className="bg-warning">
                        <h6 className="header">CONSTRUCTION</h6>
                        <h6 className="top-title"><b>Masters</b> of  Beauty, Constitency and <b>Quality.</b></h6>
                        <p className="top-sub-title">
                            Great Buildings are what makes the home glad and fulfilled to further broaden 
                            her great imaginations and also come to reality
                        </p>
                        <div><Button className="explore-btn">Explore</Button></div>
                        <div><Button className="contact-btn" onClick={contactBtnOnclick}>Contact Us</Button></div>
                        <Row>
                            <Col xs={4}>
                                <div>
                                    <div className="project-img"> <img src={IMG3} alt="" /></div>
                                    <p className="project-number">34,345</p>
                                    <p className="project-title">Projects Done</p>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <p className="building-img"> <img src={IMG4} alt="" /> </p>
                                    <p className="building-number">16,500</p>
                                    <p className="building-title">Buildings Done</p>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <p className="employee-img"> <img src={IMG5} alt="" /> </p>
                                    <p className="employee-number">400+</p>
                                    <p className="employee-title">Total Employees</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={6}>
                        <div className="top-side-img"> <img src={IMG6} alt="" /> </div>
                        <div className="top-nav-img"> <img src={IMG2} alt="" /> </div>
                        <Row className="top-nav-row">
                            <Col xs={3}> <p className="top-nav-home">Home</p> </Col>
                            <Col xs={3}> <p className="top-nav-about">About Us</p> </Col>
                            <Col xs={3}> <p className="top-nav-service">Service</p> </Col>
                            <Col xs={3}> <p className="top-nav-project">Projects</p> </Col>
                        </Row>
                        <div className="top-bottom-img"> <img src={IMG7} alt="" /> </div>
                    </Col>
                </Row>


                


                <Row className="sec-two-row">
                    <Col> <div className="sec-two-div">CHASE <img src={IMG8} alt="" height={20} width={20} /> </div> </Col>
                    <Col> <div className="sec-two-div">ASANA <img src={IMG9} alt="" height={20} width={20} /> </div> </Col>
                    <Col> <div className="sec-two-div">BuzzFeed</div> </Col>
                    <Col> <div className="sec-two-div">Walmart</div> </Col>
                </Row>

               



                <Row className="sec-three-row">
                    <Col xs={6} >
                        <div className="sec-three-description">
                            Great Buildings are what makes the home glad and fulfilled to further broaden her 
                            great imaginations and also come to reality.
                        </div>
                        <div> <Button className="sec-three-explore-btn">Explore</Button> </div>
                    </Col>
                    <Col xs={6}>
                        <div className="sec-three-product-reason">
                            Why you should choose us for your best construction experience
                        </div>
                    </Col>
                </Row>

                



                <Row>
                    <Col xs={6} className="sec-four-img-col">
                        <div className="sec-four-img-div"> <img src={IMG10} alt="" /> </div>
                    </Col>
                    <Col xs={6} className="sec-four-description-col">
                        <div className="sec-four-description-div-one">
                            <p> <img src={IMG11} alt="" /> </p>
                            <h5>01</h5>
                            <h6>
                                Great Buildings are what makes the home glad and fulfilled to further 
                                broaden her great imaginations and also come to reality
                            </h6>
                        </div>
                        <div className="sec-four-description-div-two">
                            <p> <img src={IMG12} alt="" /> </p>
                            <h5>02</h5>
                            <h6>
                                Great Buildings are what makes the home glad and fulfilled to further 
                                broaden her great imaginations and also come to reality
                            </h6>
                        </div>
                        <div className="sec-four-description-div-three">
                            <p> <img src={IMG13} alt="" /> </p>
                            <h5>03</h5>
                            <h6>
                                Great Buildings are what makes the home glad and fulfilled to further 
                                broaden her great imaginations and also come to reality
                            </h6>
                        </div>
                    </Col>
                </Row>
              




                <Row className="sec-five-row">
                    <h4> Our Best Enginners </h4>
                    <h6>
                        Great Buildings are what makes the home glad and fulfilled to further broaden <br />
                        her great imaginations and also come to reality
                    </h6>
                </Row>
               



                <div className="sec-six-div">
                <Row className="sec-six-row">
                    <Col xs="4" className="sec-six-col">
                        <h3><BsThreeDotsVertical /></h3>
                        <div> <img src={IMG14} alt="" width={95} height={105} /> </div>
                        <h4> Chris Tomas </h4>
                        <p> Canada, 1x </p>
                        <h5> 083-345-5647 </h5>
                        <h6> Christyu@gmail.com </h6>
                    </Col>
                    <Col xs="4"className="sec-six-col">
                        <h3><BsThreeDotsVertical /></h3>
                        <div> <img src={IMG15} alt="" width={95} height={105} /> </div>
                        <h4> Tomad Steven </h4>
                        <p> Michigan, 1x </p>
                        <h5> 067-335-5047 </h5>
                        <h6> Cusirty@gmail.com </h6>
                    </Col>
                    <Col xs="4"className="sec-six-col">
                        <h3><BsThreeDotsVertical /></h3>
                        <div> <img src={IMG16} alt="" width={95} height={105} /> </div>
                        <h4> John Tuyi </h4>
                        <p> Canada, 1x </p>
                        <h5> 083-345-5647 </h5>
                        <h6> Christyu@gmail.com </h6>
                    </Col>
                </Row>
                </div>

                
                
                <Footer />
            </Container> */}
        </>
    )

}

export default Homepage