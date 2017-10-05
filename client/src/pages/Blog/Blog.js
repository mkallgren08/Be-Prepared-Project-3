import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Blog.css";


const Blog = () =>
    <div>
        <Container fluid>
            <h1>Emergency Prep Blog</h1>
            <Row>
                <Col size="md-3">
                    <a href="/hurricane"><img className="blogImg" src="./images/hurricane.jpg" alt="Hurricane" /><br />Hurricane</a>
                </Col>
                <Col size="md-3">
                    <a href="/tornado"><img className="blogImg" src="./images/tornado.jpg" alt="Tornado" /><br />Tornado</a>
                </Col>
                <Col size="md-3">
                    <a href="/blizzard"><img className="blogImg" src="./images/blizzard.jpg" alt="blizzard" /><br />Blizzard</a>
                </Col>
                <Col size="md-3">
                    <a href="/earthquake"><img className="blogImg" src="./images/earthquake.jpg" alt="earthquake" /><br />Earthquake</a>
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <a href="/tsunami"><img className="blogImg" src="./images/tsunami.jpg" alt="tsunami" /><br />Tsunami</a>
                </Col>
                <Col size="md-3">
                    <a href="/fire"><img className="blogImg" src="./images/fire.jpg" alt="wild fire" /><br />Wild Fire</a>
                </Col>
                <Col size="md-3">
                    <a href="/volcano"><img className="blogImg" src="./images/volcano.jpg" alt="volcano" /><br />Volcanic Eruption</a>
                </Col>
                <Col size="md-3">
                    <a href="/flood"><img className="blogImg" src="./images/flood.jpg" alt="flood" /><br />Flood</a>
                </Col>
            </Row>
        </Container>
    </div>
export default Blog;