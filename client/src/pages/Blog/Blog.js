import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import "./Blog.css";
{/*import {Hero} from "../../components/Hero";*/}


const Blog = () =>
    <div>
        {/*<Hero backgroundimage="image/polaris.jpg">
        </Hero>*/}
        <Container fluid>
            <h1>Emergency Prep Blog</h1>
            <Row>
                <Col size="md-3">
                    <a href="/hurricane"><img src="./images/hurricane.jpg" alt="Hurricane" /><br />Hurricane</a>
                </Col>
                <Col size="md-3">
                    <a href="#"><img src="./images/tornado.jpg" alt="Tornado" /><br />Tornado</a>
                </Col>
                <Col size="md-3">
                    <a href="#"><img src="./images/blizzard.jpg" alt="blizzard" /><br />Blizzard</a>
                </Col>
                <Col size="md-3">
                    <a href="#"><img src="./images/earthquake.jpg" alt="earthquake" /><br />Earthquake</a>
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <a href="#"><img src="./images/tsunami.jpg" alt="tsunami" /><br />Tsunami</a>
                </Col>
                <Col size="md-3">
                    <a href="#"><img src="./images/fire.jpg" alt="wild fire" /><br />Wild Fire</a>
                </Col>
                <Col size="md-3">
                    <a href="#"><img src="./images/volcano.jpg" alt="volcano" /><br />Volcanic Eruption</a>
                </Col>
                <Col size="md-3">
                    <a href="#"><img src="./images/flood.jpg" alt="flood" /><br />Flood</a>
                </Col>
            </Row>
        </Container>
    </div>
export default Blog;