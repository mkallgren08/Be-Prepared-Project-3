import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";



class EmergencyForm extends Component {
    state = {
        Form: [],
        name: "",
        address: "",
        geoposition: {},
        safe: false,
        needs: {
            category: "none",
            specific: "none"
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.address && this.state.geoposition && this.state.safe) {
            API.saveForm({
                name: this.state.name,
                address: this.state.address,
                geoposition: this.state.geoposition,
                safe: this.state.safe,
                needs: {
                    category: this.state.category,
                    specific: this.state.specific
                },           
            }).then(res => this.loadUser())
            .catch(err => console.log(err));
        }
    }

      render(){
          return(
            <Container fluid>
                <h3>Emergency Status Form</h3>
                <br/>
                <Row>
                    <Col size="md-6">
                        <div className="wrapper">
                            <h4>Full Name{/*{this.state.name}*/}</h4>
                            <h4>Location{/*{this.state.location}*/}</h4>
                            <button className="blueBtn btn btn-default btn-lg">Change Location</button>
                        </div>

                        <br/><br/>

                        <div className="wrapper">
                            <Col size="md-2" />
                            <Col size="md-3">
                                <Jumbotron >
                                    <div>
                                        <h4 style={{textAlign: "center", textDecoration: "underline", color: "white"}}>Let Your Family Know Your Safety Status:</h4>
                                        <div className="radio" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="radio" name="optradio" value="safe"/>Safe</label>
                                        </div>
                                        <div className="radio" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="radio" name="optradio" value="notSafe"/>Not Safe</label>
                                        </div>

                                        <h4 style={{textAlign: "center", textDecoration: "underline", color: "white"}}>What Does Your Family Need: </h4>
                                        <div className="checkbox" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="checkbox" value="evacuation"/>Evacuation</label>
                                        </div>
                                        <div className="checkbox" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="checkbox" value="medEmergency"/>Medical Emergency</label>
                                        </div>
                                        <div className="checkbox" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="checkbox" value="medical"/>Medical</label>
                                        </div>
                                        <div className="checkbox" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="checkbox" value="childCare"/>Child Care</label>
                                        </div>
                                        <div className="checkbox" style={{textAlign: "left"}}>
                                            <label style={{color: "white", fontSize: "20px"}}><input type="checkbox" value=""/>Misc.</label>
                                        </div>
                                        

                                    </div>
                                </Jumbotron>    
                            </Col>
                            <Col size="md=1"/>                        
                        </div>
                    </Col>
                    <Col size="md-6">
                        <h4 style={{textAlign: "left" }}>Please specify what you need:</h4>
                        <textarea style={{height:"405px", width:"650px"}}/>
                        <button className="blueBtn btn btn-default btn-lg">Submit</button>
                    </Col>
                </Row>
            </Container>
          );
      }
}
export default EmergencyForm;