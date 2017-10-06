import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Blog.css";


const Blog = () =>
    <div>
        <Container fluid>
            <h1>Emergency Prep Blog</h1>
            <Row>
                <Col size="md-4">
                  <div className="wrapper">
                    <a href="/hurricane"><img className="blogImg" src="./images/hurricane.jpg" alt="Hurricane" /><br />Hurricane</a>
                  </div>
                </Col>
                <Col size="md-4">
                  <div className="wrapper">
                    <a href="/tornado"><img className="blogImg" src="./images/tornado.jpg" alt="Tornado" /><br />Tornado</a>
                  </div>
                </Col>
                <Col size="md-4">
                  <div className="wrapper">
                    <a href="/blizzard"><img className="blogImg" src="./images/blizzard.jpg" alt="blizzard" /><br />Blizzard</a>
                  </div>
                </Col>
                
            </Row>
            <Row>
                <Col size="md-4">
                  <div className="wrapper">
                    <a href="/tsunami"><img className="blogImg" src="./images/tsunami.jpg" alt="tsunami" /><br />Tsunami</a>
                  </div>
                </Col>
                <Col size="md-4">
                  <div className="wrapper">
                    <a href="/fire"><img className="blogImg" src="./images/fire.jpg" alt="wild fire" /><br />Wild Fire</a>
                  </div>
                </Col>
                <Col size="md-4">
                  <div className="wrapper">
                    <a href="/volcano"><img className="blogImg" src="./images/volcano.jpg" alt="volcano" /><br />Volcanic Eruption</a>
                  </div>
                </Col>

            </Row>
            <br /> <br />
        </Container>
    </div>
export default Blog;