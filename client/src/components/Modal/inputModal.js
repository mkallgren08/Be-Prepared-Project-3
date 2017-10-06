import React from "react";
import { Button, Modal } from 'react-bootstrap';

class InputModal extends React.Component {
  state = {
    showModal: false
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Add/Update
          </Button>

        <Modal show={this.state.showModal} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.children}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary" onClick={this.handleFormSubmit}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default InputModal;
