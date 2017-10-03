import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import "./Drone.css";
{/*import {Hero} from "../../components/Hero";*/}

class Drone extends Component {
    
    render(){
        return(
            <div>
        {/*<Hero backgroundimage="image/polaris.jpg">
        </Hero>*/}
                <Container fluid>
                    <h1>Drones</h1>
                    <div className="wrapper">
                         <button className="btn btn-default btn-lg">Add Your Drone to List</button>
                    </div>
                    <Row>
                        <Col size="md-3"/>
                        <Col size="md-6">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Drones</h3>
                                </div>
                                <div className="panel-body scroll">
                                    Panel content
                                </div>
                            </div>
                        </Col>
                        <Col size="md-3"/>
                    </Row>
            
                </Container>
            </div>
        );
    }
}

export default Drone;