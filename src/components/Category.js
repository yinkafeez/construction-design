import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"
import IMG8 from "../images/IMG8.png"
import IMG9 from "../images/IMG9.png"


function Category() {
    return (
            <Container className="category-container">
                <Row className="category-row">
                    <Col xs={3} className="category-col">
                        <div className="category-div">
                            CHASE <img src={IMG8} className="category-img" />
                        </div>
                    </Col>
                    <Col xs={3} className="category-col">
                        <div className="category-div">
                            ASANA <img src={IMG9} className="category-img" />
                        </div>
                    </Col>
                    <Col xs={3} className="category-col">
                        <div className="category-div">
                            BuzzFeed 
                        </div>
                    </Col>
                    <Col xs={3} className="category-col">
                        <div className="category-div">
                            Walmart 
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}


export default Category