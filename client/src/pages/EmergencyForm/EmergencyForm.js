import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";



class EmergencyForm extends Component {
    state = {
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

      render(){
          return(
            <Container fluid>
                <h1>Emergency Status Form</h1>
                
                <Row>
                    
                </Row>
            </Container>
          );
      }
}
export default EmergencyForm;