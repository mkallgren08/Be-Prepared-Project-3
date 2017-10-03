import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <h1>Resource Sharing</h1>
            <Row>
                <Col size="md-3">
                    <img src="#" alt="drone" />
                </Col>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
                <Col size="md-3">
                    <img src="#" alt="#" />
                </Col>
            </Row>
        </Container>
    </div>

export default Resource;