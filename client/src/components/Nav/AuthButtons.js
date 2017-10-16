import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

export default class AuthButtons extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
    
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!isAuthenticated() && (
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.login.bind(this)}
          >
            Sign Up/Log In
          </Button>
        )}
        {isAuthenticated() && (
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.logout.bind(this)}
          >
            Log Out
          </Button>
        )}
      </div>
    );
  }
}
