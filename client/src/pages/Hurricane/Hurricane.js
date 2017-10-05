import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "./Hurricane.css";

class Hurricane extends Component{

    state = {
        Hurricane: [],
        title: "",
        author: "",
        link: "",
        body: "",
    }

    componentDidMount() {
        this.loadHurricane();
    }

    loadHurricane = () => {
        API.getHurricane()
        .then(res =>
            this.setState({ Hurricane: res.data, title: "", author: "", link: "", body: "" })
        ).catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.title && this.state.author && this.state.body) {
            API.saveHurricane({
                title: this.state.title,
                author: this.state.author,
                link: this.state.link,
                author: this.state.author
            }).then(res => this.loadDrone())
            .catch(err => console.log(err));
        }
    }

    render(){
        return(
            <div>
                <Container fluid>
                    <h1>Hurricane Prep</h1>
                    <div className="wrapper">
                        <FormBtn className="btn btn-default btn-lg">Add Your Post</FormBtn>
                    </div>
                    <br/> <br/> <br/>
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