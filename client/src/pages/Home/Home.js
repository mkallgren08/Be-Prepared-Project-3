import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Jumbotron from "../../components/Jumbotron";
import "./Home.css";

const Home = () =>
    <div>
        <Container fluid>
            <Row>
                <Col size="md-3">
                    <h1 className="pageHeader">Polaris</h1>
                </Col>
                <Col size="md-9" />
            </Row>
            <br /> <br /> <br />
            <Row>
                <Col size="md-3" />
                <Col size="md-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </Col>
                <Col size="md=3" />
            </Row>
            <br /><br />
            <Row>
                <Col size="md-4" />
                <Col size="md-4">
                    <Jumbotron>
                        <h2 style={{ color: 'white', textAlign: 'center', textDecoration: "underline" }}>Emergency Checklists</h2>
                        <a href="./uploads/CommuterEmergencyPlan.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Commuter Emergency Plan</h4></a>
                        <a href="./uploads/DisasterPlanningforPetOwners.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Disaster Planning for Pet Owners</h4></a>
                        <a href="./uploads/DisasterPlanningforSpecialNeeds.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Disaster Planning for Special Needs</h4></a>
                        <a href="./uploads/EmergencyChecklist2014.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Emergency Checklist 2012</h4></a>
                        <a href="./uploads/FamilyCommunicationplankids.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Family Communication Plan for Kids</h4></a>
                        <a href="./uploads/FamilyCommunicationPlanparents.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> Family Communication Plan for Parents</h4></a>
                        <a href="./uploads/FEMAChecklistChild.pdf" target="_blank"><h4><span className="glyphicon glyphicon-list-alt" /> FEMA Checklist</h4></a>
                    </Jumbotron>
                </Col>
                <Col size="md-4" />
            </Row>
        </Container>;
    </div>
export default Home;