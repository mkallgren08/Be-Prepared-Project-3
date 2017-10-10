import React, { Component } from "react"; import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import "./Profile.css";
import InputModal from "../../components/Modal/inputModal";

class Profile extends Component {

    state = {
        User: [],
        name: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        phoneNumber: "",
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.getUser()
<<<<<<< HEAD
        .then(res =>
            this.setState({ ...res.data })
        ).catch(err => console.log(err));
=======
            .then(res =>
                this.setState({ User: res.data, name: "", address: "", city: "", state: "", zipCode: "", phoneNumber: "" })
            )
            .catch(err => console.log(err));
>>>>>>> 82fb0ffe1315dc384ce2bdf1817c3c77d62b6bd2
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.address && this.state.city && this.state.state && this.state.zipCode && this.state.phoneNumber) {
            API.saveUser({
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zipCode,
                phoneNumber: this.state.phoneNumber
            }).then(res => this.loadUser())
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <h1>My Profile</h1>
                    <br />
                    <Row>
                        <div className="wrapper">
                            <a href="/emergencyform">
                                <button className="blueBtn btn btn-default">Emergency Status Form</button>
                            </a>
                        </div>
                    </Row>

                    <br /><br />

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
<<<<<<< HEAD

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
=======
                            <div className="wrapper">

                                <InputModal>
                                    <h2 className="whiteText">Add/Update User Information</h2>
                                    <form>
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
                                        <div style={{ textAlign: "right" }}>
                                            <button style={{ marginRight: "5px" }} onChange={this.handleInputChange} onClick={this.handleFormSubmit} className="blueBtn">Submit</button>
                                            <button className="blueBtn" onClick={this.closeModal}>Close</button>
                                        </div>
                                    </form>

                                </InputModal>
                            </div>
                            <div>
                                <h4>{this.state.name}</h4>
                                <h4>{this.state.address}</h4>
                                <h4>{this.state.city}</h4>
                                <h4>{this.state.state}</h4>
                                <h4>{this.state.zipCode}</h4>
                                <h4>{this.state.phoneNumber}</h4>
                            </div>
>>>>>>> 82fb0ffe1315dc384ce2bdf1817c3c77d62b6bd2

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
                </Container>
            </div>
        );
    }
}
export default Profile;