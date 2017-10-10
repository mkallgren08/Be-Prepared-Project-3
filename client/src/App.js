import React, { Component } from 'react';
import { Navbar, a } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Resource from "./pages/Resource";
import Hurricane from "./pages/Hurricane";
import Drone from "./pages/Drone";
import EmergencyForm from "./pages/EmergencyForm";
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
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Polaris</a>
            </Navbar.Brand>
            <ul className="nav navbar-nav " style={{ paddingRight: "20px", lineHeight: "50px" }}>
              <li
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </li>
              {
                !isAuthenticated() && (
                  <li
                    onClick={this.login.bind(this)}
                  >
                  Log In
                    </li>
                )
              }
              {
                isAuthenticated() && (
                  <li
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                    </li>
                )
              }
              {
                isAuthenticated() && (
                  <li
                    onClick={this.goTo.bind(this, 'ping')}
                  >
                    Ping
                    </li>
                )
              }
              {
                isAuthenticated() && (
                  <li
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                    </li>
                )
              }
              <li className={window.location.pathname === "/resource" ? "active" : ""}>
                <Link to="/resource">Resources</Link>
              </li>
              <li className={window.location.pathname === "/blog" ? "active" : ""}>
                <Link to="/blog">Emergency Prep Blog</Link>
              </li>
            </ul>
          </Navbar.Header>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/resource" component={Resource} />
        <Route exact path="/drone" component={Drone} />
        <Route exact path="/hurricane" component={Hurricane} />
        <Route exact path="/emergencyform" component={EmergencyForm} />
      </div>
    );
  }
}

export default App;