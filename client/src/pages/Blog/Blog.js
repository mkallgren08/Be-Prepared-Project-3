import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import { Link } from "react-router-dom";
import "./Blog.css";


const Blog = () =>
  <div>
    <Container fluid>
      <Row>
        <Col size="md-1" />
        <Col size="md-4">
          <h1 className="pageHeader">Emergency Prep Blog</h1>
        </Col>
        <Col size="md-7" />
      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/hurricane" className="whiteText">
              <img className="blogImg" src="./images/hurricane.jpg" alt="Hurricane" />
              <br />
            </Link>
            <h3 className="eventTitle">Hurricane</h3>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/tornado" className="whiteText">
              <img className="blogImg" src="./images/tornado.jpg" alt="Tornado" />
              <br />
            </Link>
            <h3 className="eventTitle">Tornado</h3>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/blizzard" className="whiteText">
              <img className="blogImg" src="./images/blizzard.jpg" alt="blizzard" />
              <br />
            </Link>
            <h3 className="eventTitle">Blizzard</h3>
          </div>
        </Col>

      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/tsunami" className="whiteText">
              <img className="blogImg" src="./images/tsunami.jpg" alt="tsunami" />
              <br />
            </Link>
            <h3 className="eventTitle">Tsunami</h3>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/fire" className="whiteText">
              <img className="blogImg" src="./images/fire.jpg" alt="wild fire" />
              <br />
            </Link>
            <h3 className="eventTitle">Wild Fire</h3>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="volcano" className="whiteText">
              <img className="blogImg" src="./images/volcano.jpg" alt="volcano" />
              <br />
            </Link>
            <h3 className="eventTitle">Volcanic Eruption</h3>
          </div>
        </Col>

      </Row>
      <br /> <br />
    </Container>
  </div>
export default Blog;
