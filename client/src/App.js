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
        {/* <Navbar fluid> */}
        {/* <Navbar.Header> */}
        <Row>
          <Col md={3}>
            {/* <Navbar.Brand> */}
            <Row>
              <Col md={6} className = "navBrandWrapper">
                <div className="navBrand">
                  <a href="/home">Polaris</a>
                </div>
              </Col>
              <Col md={6} className = "navGitWrapper">
                <div className="navGit">
                  <a href="https://www.google.com">Polaris</a>
                </div>
              </Col>
            </Row>
            {/* </Navbar.Brand> */}
          </Col>
          <Col md={2} />
          <Col md={7}>
            <div className="navWrapper">
              <Button
                //bsStyle="primary"
                //className="btn-margin"
                className="navButton"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>
              <Button
                //bsStyle="primary"
                //className="btn-margin"
                className="navButton"
                onClick={this.goTo.bind(this, 'resource')}
              >
                Resources
              </Button>
              <Button
                //bsStyle="primary"
                //className="btn-margin"
                className="navButton"
                onClick={this.goTo.bind(this, 'blog')}
              >
                Blogs
              </Button>
              {
                !isAuthenticated() && (
                  <Button
                    //bsStyle="primary"
                    //className="btn-margin"
                    className="navButton"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    //bsStyle="primary"
                    //className="btn-margin"
                    className="navButton"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    //bsStyle="primary"
                    //className="btn-margin"
                    className="navButton"
                    onClick={this.goTo.bind(this, 'emergencyform')}
                  >
                    EmergencyForm
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    //bsStyle="primary"
                    //className="btn-margin"
                    className="navButton"
                    onClick={this.goTo.bind(this, 'emergencymap')}
                  >
                    EmergencyMap
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    //bsStyle="primary"
                    //className="btn-margin"
                    className="navButton"
                    onClick={this.goTo.bind(this, 'ping')}
                  >
                    Ping
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    //bsStyle="primary"
                    //className="btn-margin"
                    className="navButton navLoginOut"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                    </Button>
                )
              }
            </div>
          </Col>
        </Row>
        {/* </Navbar.Header> */}
        {/* </Navbar> */}

      </div>
    );
  }
}

export default App;