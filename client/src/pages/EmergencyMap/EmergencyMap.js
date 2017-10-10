import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import "./EmergencyMap.css";
import InputModal from "../../components/Modal/inputModal";

class EmergencyMap extends Component {

    // componentDidMount() {
    //     this.loadEmergencyMap();
    // }

    // loadEmergencyMap = () => {
    //     API.getEmergencyMap()
    //     .then(res =>
    //         this.setState({ EmergencyMap: res.data, title: "", author: "", link: "", body: "" })
    //     ).catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const {name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    render() {
        return (
            <div>
                <Container fluid>
                    <h1>Emergency Map </h1>
                    <br /> <br /> <br />
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <div id="map">

                            </div>
                        </Col>
                        <Col size="md-2" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default EmergencyMap;



// import React from "react";

// const Map = () =>
//     <div id="map">

//     </div>


// export default Map;    