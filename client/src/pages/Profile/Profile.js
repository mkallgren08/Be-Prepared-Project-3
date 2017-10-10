import React, { Component } from "react";
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import "./Profile.css";
import InputModal from "../../components/Modal/inputModal";
import { Button } from "react-bootstrap";

class Profile extends Component {
  state = {
    User: [],
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    const { auth } = this.props;

    auth.getProfile((err, profile) => {
      if (err) throw new Error("Error retrieving profile from Auth0");
      console.log(profile);
      API.getUser(auth.getAccessToken(), profile.sub)
      .then(res => this.setState({ ...res.data }))
      .catch(err => console.log(err));
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
        this.state.name &&
        this.state.address &&
        this.state.city &&
        this.state.state &&
        this.state.zipCode &&
        this.state.phoneNumber
    ) {
      API.saveUser({
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber
      })
      .then(res => this.loadUser())
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <div>
          <Container fluid>
            <h1>My Profile</h1>
            <br /> <br />
            <Row>
              <Col size="md-5">
                <div className="panel panel-default panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">My Posts</h3>
                  </div>
                  <div className="panel-body scroll">Panel content</div>
                </div>
              </Col>
              <Col size="md-2">
                <div className="wrapper">
                  <Input
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      placeholder="Name (required)"
                  />
                  <Input
                      name="address"
                      value={this.state.address}
                      onChange={this.handleInputChange}
                      placeholder="Address (required)"
                  />
                  <Input
                      name="city"
                      value={this.state.city}
                      onChange={this.handleInputChange}
                      placeholder="City (required)"
                  />
                  <Input
                      name="state"
                      value={this.state.state}
                      onChange={this.handleInputChange}
                      placeholder="State (required)"
                  />
                  <Input
                      name="zipCode"
                      value={this.state.zipCode}
                      onChange={this.handleInputChange}
                      placeholder="Zip Code (required)"
                  />
                  <Input
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleInputChange}
                      placeholder="Phone Number (required)"
                  />
                </div>
                <div>
                  <h4>{this.state.name}</h4>
                  <h4>{this.state.address}</h4>
                  <h4>{this.state.city}</h4>
                  <h4>{this.state.state}</h4>
                  <h4>{this.state.zipCode}</h4>
                  <h4>{this.state.phoneNumber}</h4>
                </div>
              </Col>
              <Col size="md-5">
                <div className="panel panel-default panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Favorites</h3>
                  </div>
                  <div className="panel-body scroll">Panel content</div>
                </div>
              </Col>
            </Row>
            <Row>
              <a href="/emergencyform">
                <Button className="blueBtn">Emergency Status Form</Button>
              </a>
            </Row>
          </Container>
        </div>
    );
  }
}
export default Profile;
