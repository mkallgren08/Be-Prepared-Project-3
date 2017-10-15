import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Jumbotron from "../../components/Jumbotron";
import "../../index.css"
import "./Home.css";

const Home = () =>
    <div>
        <Container fluid>
            <br />
            <Row>
                <Col size="md-3" />
                <Col size="md-6">
                    <div className="homePageBody">
                        <strong>
                            <div className="intro"><h2 style={{ textDecoration: "underline" }}>Welcome to the Polaris Preparedness</h2>
                                <p className="introText">Emergencies and disasters can happen at any time.  Being prepared will provide you and your family
                        with what you need to cope with those emergencies.  This site will provide you with information
                        and resources to help you prepare for and manage emergencies.</p>
                            </div>
                        </strong>
                    </div>
                </Col>
                <Col size="md=3" />
            </Row>
            <br /><br />
            <Row>
                <Col size="md-2" />
                <Col size="md-8">
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center', textDecoration: "underline" }}>Emergency Checklists</h2>
                        <Row>
                            <Col size="md-6">
                                <a href="./uploads/CommuterEmergencyPlan.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Commuter Emergency Plan</h4></a>
                                <a href="./uploads/DisasterPlanningforPetOwners.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Disaster Planning for Pet Owners</h4></a>
                                <a href="./uploads/DisasterPlanningforSpecialNeeds.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Disaster Planning for Special Needs</h4></a>
                                <a href="./uploads/EmergencyChecklist2014.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Emergency Checklist 2012</h4></a>
                            </Col>
                            <Col size="md-6">
                                <a href="./uploads/FamilyCommunicationplankids.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Family Communication Plan for Kids</h4></a>
                                <a href="./uploads/FamilyCommunicationPlanparents.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Family Communication Plan for Parents</h4></a>
                                <a href="./uploads/FEMAChecklistChild.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> FEMA Checklist</h4></a>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col size="md-2" />
            </Row>
        </Container>;
    </div>
export default Home;