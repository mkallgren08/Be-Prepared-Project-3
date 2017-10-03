import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import "./Hurricane.css";

class Hurricane extends Component{

    render(){
        return(
            <div>
                <Container fluid>
                    <h1>Hurricane Prep</h1><br/>
                    <div className="wrapper">
                        <button className="btn btn-default btn-lg">Add Your Post</button><br/>
                    </div>
                    <Row>
                        <Col size="md-2"/>
                        <Col size="md-8">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Hurricanes</h3>
                                </div>
                                <div className="panel-body scroll">
                                    Panel content
                                </div>
                            </div>
                        </Col>
                        <Col size="md-2"/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Hurricane;