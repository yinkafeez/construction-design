import React from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {BsThreeDotsVertical} from  "react-icons/bs"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import IMG14 from "../images/IMG14.png"
import IMG15 from "../images/IMG15.png"
import IMG16 from "../images/IMG16.png"


function Enginner() {
    return(
        <Container className="engineer-container">
            <div className="engineer-header-div">
                <h4 className="engineer-heading"> Our Best Enginners </h4>
                <p className="engineer-sub-heading">
                    Great Buildings are what makes the home glad and fulfilled to further broaden<br /> her 
                    great imaginations and also come to reality
                </p>
            </div>

            <Row className="engineer-row">
                <Col xs={12} md={4} className="engineer-col">
                    <div className="engineer-icon-div"> <BsThreeDotsVertical className="engineer-icon" /> </div>
                    <div className="engineer-img-div"> <img src={IMG14} className="engineer-img" /> </div>
                    <div className="engineer-name"> Chris Tomas </div>
                    <div className="engineer-country"> Canada, 1x </div>
                    <p className="engineer-number"> 083-345-5647 </p>
                    <div className="engineer-email"> Christyu@gmail.com </div>
                </Col>
                <Col xs={12} md={4} className="engineer-col">
                    <div className="engineer-icon-div"> <BsThreeDotsVertical className="engineer-icon" /> </div>
                    <div className="engineer-img-div"> <img src={IMG15} className="engineer-img" /> </div>
                    <div className="engineer-name"> Tomad Steven </div>
                    <div className="engineer-country"> Michigan, 1x </div>
                    <p className="engineer-number"> 067-335-5047 </p>
                    <div className="engineer-email"> Cusirty@gmail.com </div>
                </Col>
                <Col xs={12} md={4} className="engineer-col">
                    <div className="engineer-icon-div"> <BsThreeDotsVertical className="engineer-icon" /> </div>
                    <div className="engineer-img-div"> <img src={IMG16} className="engineer-img" /> </div>
                    <div className="engineer-name"> Jogn Tuyi </div>
                    <div className="engineer-country"> Canada, 1x </div>
                    <p className="engineer-number"> 083-345-5647 </p>
                    <div className="engineer-email"> Christyu@gmail.com </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Enginner