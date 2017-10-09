import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <h1>Resource Sharing</h1>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/drone">
                            <img className="resourceImg" src="./images/drone.jpg" alt="drone" />
                            <br />
                            Drones
                         </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/firstaid">
                            <img className="resourceImg" src="./images/firstAid.png" alt="First Aid" />
                            <br />
                            First Aid
                        </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/rafts">
                            <img className="resourceImg" src="./images/boats.jpg" alt="Rafts" />
                            <br />
                            Rafts
                        </a>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/foodAndWater">
                            <img className="resourceImg" src="./images/foodAndWater.svg" alt="Food/Water" />
                            <br />
                            Food/Water
                        </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/generator">
                            <img className="resourceImg" src="./images/generator.jpg" alt="Generator" />
                            <br />
                            Generator
                        </a>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <a className="whiteText" href="/generalResource">
                            <img className="resourceImg" src="./images/general.ico" alt="General" />
                            <br />
                            Miscellaneous
                        </a>
                    </div>
                </Col>
            </Row>
            <br /> <br />
        </Container>
    </div>

export default Resource;