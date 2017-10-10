import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import "./Blog.css";


const Blog = () =>
  <div>
    <Container fluid>
      <h1 className="blackText">Emergency Prep Blog</h1>
      <h3 className="blackText">Search for information on how to prepare for natural disasters</h3>
      <Row>
        <Col size="md-4">
          <div className="wrapper">
            <a className="whiteText" href="/hurricane">
              <img className="blogImg" src="./images/hurricane.jpg" alt="Hurricane" />
              <br />
              Hurricane
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <a className="whiteText" href="/tornado">
              <img className="blogImg" src="./images/tornado.jpg" alt="Tornado" />
              <br />
              Tornado
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <a className="whiteText" href="/blizzard">
              <img className="blogImg" src="./images/blizzard.jpg" alt="blizzard" />
              <br />
              Blizzard
            </a>
          </div>
        </Col>

      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper">
            <a className="whiteText" href="/tsunami">
              <img className="blogImg" src="./images/tsunami.jpg" alt="tsunami" />
              <br />
              Tsunami
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <a className="whiteText" href="/fire">
              <img className="blogImg" src="./images/fire.jpg" alt="wild fire" />
              <br />
              Wild Fire
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <a className="whiteText" href="/volcano">
              <img className="blogImg" src="./images/volcano.jpg" alt="volcano" />
              <br />
              Volcanic Eruption
            </a>
          </div>
        </Col>

      </Row>
      <br /> <br />
    </Container>
  </div>
export default Blog;