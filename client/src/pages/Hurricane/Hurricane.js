import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
{/*import {Hero} from "../../components/Hero";*/}

class Hurricane extends Component{

    render(){
        return(
            <div>
        {/*<Hero backgroundimage="image/polaris.jpg">
        </Hero>*/}
                <Container fluid>
                    <h1>Hurricane Prep</h1>
                    <button className="btn btn-default btn-lg">Add Your Post</button>

                    <Row>
                        <Col size="md-3"/>
                        <Col size="md-6">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Hurricanes</h3>
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

export default Hurricane;