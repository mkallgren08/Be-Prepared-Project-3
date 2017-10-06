import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Resource from "./pages/Resource";
import Hurricane from "./pages/Hurricane";
import Nav from "./components/Nav";
import EmergencyForm from "./pages/EmergencyForm";
import Auth from './Auth/Auth.js';


const auth = new Auth();
auth.login


const App = () => 
  <Router>
    <div>

      <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/resource" component={Resource} />
        <Route exact path="/hurricane" component={Hurricane} />
        <Route exact path="/emergencyform" component={EmergencyForm} />

    </div>
  </Router>;

export default App;
