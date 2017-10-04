import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <h1>Resource Sharing</h1>
            <Row>
                <Col size="md-3">
                    <a href="/drone"><img className="resourceImg" src="./images/drone.jpg" alt="drone" /><br />Drones</a>
                </Col>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
                <Col size="md-3">
                    <img className="resourceImg" src="http://via.placeholder.com/150x150" alt="placeholder" />
                </Col>
            </Row>
        </Container>
    </div>

export default Resource;