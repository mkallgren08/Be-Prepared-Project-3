import React, { Component } from 'react';
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
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
        <Navbar fluid>
          {/* <Navbar.Header> */}
            {/* <Row>
              <Col md={2}> */}
                <Navbar.Brand>
                  <a href="/home">Polaris</a>
                </Navbar.Brand>
              {/* </Col>
              <Col md={5} />
              <Col md={5}> */}
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'home')}
                >
                  Home
              </Button>
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'resource')}
                >
                  Resources
              </Button>
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'blog')}
                >
                  Blogs
              </Button>
                {
                  !isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'profile')}
                    >
                      Profile
                    </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'emergencyform')}
                    >
                      EmergencyForm
                    </Button>
                  )
                }s
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'emergencymap')}
                    >
                      EmergencyMap
                    </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'ping')}
                    >
                      Ping
                    </Button>
                )
              }
              {
                isAuthenticated() &&  (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
                }
              {/* </Col>
            </Row> */}
          {/* </Navbar.Header> */}
        </Navbar>

      </div>
    );
  }
}

export default App;