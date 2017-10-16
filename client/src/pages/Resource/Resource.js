import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import { Link } from "react-router-dom";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <Row>
                <Col size="md-1" />
                <Col size="md-3">
                    <h1 className="pageHeader">Resources</h1>
                </Col>
                <Col size="md-7" />
            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/drone" className="whiteText">
                            <img className="resourceImg" src="./images/drone.jpg" alt="drone" />
                            <br />
                         </Link>
                         <h3 className="resourceLink">Drones</h3>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="./firstaid" className="whiteText">
                            <img className="resourceImg" src="./images/firstAid.png" alt="First Aid" />
                            <br />
                        </Link>
                        <h3 className="resourceLink">First Aid</h3>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/raft" className="whiteText">
                            <img className="resourceImg" src="./images/boats.jpg" alt="Rafts" />
                            <br />
                        </Link>
                        <h3 className="resourceLink">Rafts</h3>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/foodwater" className="whiteText">
                            <img className="resourceImg" src="./images/foodAndWater.svg" alt="Food/Water" />
                            <br />
                        </Link>
                        <h3 className="resourceLink">Food/Water</h3>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/generator" className="whiteText">
                            <img className="resourceImg" src="./images/generator.jpg" alt="Generator" />
                            <br />
                        </Link>
                        <h3 className="resourceLink">Generator</h3>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/misc" className="whiteText">
                            <img className="resourceImg" src="./images/general.ico" alt="General" />
                            <br />
                        </Link>
                        <h3 className="resourceLink">Miscellaneous</h3>
                    </div>
                </Col>
            </Row>
            <br /> <br />
        </Container>
    </div>

export default Resource;