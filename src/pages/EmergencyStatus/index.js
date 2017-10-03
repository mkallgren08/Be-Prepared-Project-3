// Import Up Here

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

}