import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from 'react-bootstrap';
import { Input, FormBtn } from "../../components/Form";

const BlogModal = React.createClass({
    getInitialState() {
      return { showModal: false };
    },
  
    close() {
      this.setState({ showModal: false });
    },
  
    open() {
      this.setState({ showModal: true });
    },
  
    render() {
      return (
        <div>
          <p>Click to get the full Modal experience!</p>
  
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open}
          >
            Add a Post
          </Button>
  
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Add Your Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Input
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="Title (required)"
              />
              <Input
                name="author"
                value={this.state.author}
                onChange={this.handleInputChange}
                placeholder="Author (required)"
              />
              <Input
                name="link"
                value={this.state.link}
                onChange={this.handleInputChange}
                placeholder="Link (required)"
              />
              <Input
                name="body"
                value={this.state.body}
                onChange={this.handleInputChange}
                placeholder="Post"
              />                
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  });
  
  ReactDOM.render(<BlogModal />, document.getElementById("insertBlogModal"));