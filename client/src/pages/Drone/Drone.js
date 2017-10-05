import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "./Drone.css";

class Drone extends Component {
    
   state = {
       Drone: [],
       name: "",
       zipCode: "",
       phoneNumber: "",
       comment:"",
   } 

   componentDidMount() {
       this.loadDrone();
   }

   loadDrone = () => {
    //    API.getDrone()
    //    .then(res =>
    //     this.setState({ Drone: res.data, name: "", zipCode: "", phoneNumber: "", comment:"" })
    // ).catch(err => console.log(err));
   };

   handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.name && this.state.zipCode && this.state.phoneNumber && this.state.comment) {
        //     API.saveDrone({
        //         name: this.state.name,
        //         zipCode: this.state.zipCode,
        //         phoneNumber: this.state.phoneNumber,
        //         comment: this.state.comment
        //     }).then(res => this.loadDrone())
        //     .catch(err => console.log(err));
        // }
    }

    render(){
        return(
            <div>

                <Container fluid>
                    <h1>Drones</h1>
                    <div className="wrapper">
                         <FormBtn className="btn btn-default btn-lg">Add Your Drone to List</FormBtn>
                    </div>
                    <br /> <br /> <br />
                    <Row>
                        <Col size="md-2"/>
                        <Col size="md-8">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Drones</h3>
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

export default Drone;