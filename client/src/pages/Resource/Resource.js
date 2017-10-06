import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <h1>Resource Sharing</h1>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                         <a href="/drone"><img className="resourceImg" src="./images/drone.jpg" alt="drone" /><br />Drones</a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                    </div>
                </Col>
                
            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                    </div>
                </Col>
            </Row>
            <br /> <br />
        </Container>
    </div>

export default Resource;