import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import "./Profile.css";
{/*import {Hero} from "../../components/Hero";*/}


const Profile = () =>
    <div>
        <Container fluid>
            <Row>
                <Col size="md-5">
                    <div className="panel panel-default panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">My Posts</h3>
                        </div>
                        <div className="panel-body scroll">
                            Panel content
                        </div>
                    </div>
                </Col>
                <Col size="md-2">
                    <h4>Name</h4>
                    <h4>Location</h4>
                    <h4>Email</h4>
                    <h4>Phone Number</h4>

                    <h4>Safe/Help</h4>
                    <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger" />

                </Col>
                <Col size="md-5">
                    <div className="panel panel-default panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Favorites</h3>
                        </div>
                        <div className="panel-body scroll">
                            Panel content
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src="http://via.placeholder.com/600x600" alt="googleMap" />
            </Row>
        </Container>
    </div>

export default Profile;