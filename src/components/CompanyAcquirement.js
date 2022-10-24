import React from "react" 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import IMG10 from "../images/IMG10.png"

function CompanyAcquirement() {
    return(
        <Container fluid className="homepage-container">
            {/* row one */}
            <Row className="comapny-reason-row-one">
                <Col xs={6} className="comapny-reason-row-one-col">
                    <p className="comapny-reason-row-one-col-one-text">
                        Great Buildings are what makes the home glad and fulfilled to further broaden 
                        her great imaginations and also come to reality
                    </p>
                    <div className="comapny-reason-row-one-col-one-btn-div">
                        <Button className="sec-one-explore-btn"> Explore </Button>
                    </div>
                </Col>

                <Col xs={6} className="comapny-reason-row-one-col">
                    <div className="comapny-reason-row-one-col-two-text">
                        Why you should choose us for your best construction experience
                    </div>
                </Col>
            </Row>

            {/* row two */}

            <Row className="comapny-reason-row-two">
                <Col xs={6}>
                    <img src={IMG10} alt="" className="comapny-reason-row-two-img" />
                </Col>
                <Col xs={6} className="comapny-reason-row-two-col-two">
                    <Row>
                        <Col xs={2}> 
                            <div className="comapny-reason-row-two-number"> 01 </div> 
                            <div className="comapny-reason-row-two-number-bg-cover-one"></div>
                        </Col>
                        <Col className="comapny-reason-row-two-text-col">
                            <div className="comapny-reason-row-two-text">
                                Great Buildings are what makes the home glad and fulfilled to further 
                                broaden her great imaginations and also come to reality
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={2}> 
                            <div className="comapny-reason-row-two-number"> 02 </div> 
                            <div className="comapny-reason-row-two-number-bg-cover-two"></div>
                        </Col>
                        <Col className="comapny-reason-row-two-text-col">
                            <div className="comapny-reason-row-two-text">
                                Great Buildings are what makes the home glad and fulfilled to further 
                                broaden her great imaginations and also come to reality
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={2}> 
                            <div className="comapny-reason-row-two-number"> 03 </div> 
                            <div className="comapny-reason-row-two-number-bg-cover-three"></div>
                        </Col>
                        <Col className="comapny-reason-row-two-text-col">
                            <div className="comapny-reason-row-two-text">
                                Great Buildings are what makes the home glad and fulfilled to further 
                                broaden her great imaginations and also come to reality
                            </div>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default  CompanyAcquirement