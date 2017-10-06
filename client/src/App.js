import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Resource from "./pages/Resource";
import Hurricane from "./pages/Hurricane";
import Nav from "./components/Nav";
import Auth from "./auth/auth";
import Callback from "./Callback/Callback";
import history from "./history";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history}>
    <div>
      <Nav auth={auth} />
      <Route exact path="/" render={props => <Home auth={auth} {...props} />} />
      <Route
        exact
        path="/profile"
        render={props => <Profile auth={auth} {...props} />}
      />
      <Route
        exact
        path="/blog"
        render={props => <Blog auth={auth} {...props} />}
      />
      <Route
        exact
        path="/resource"
        render={props => <Resource auth={auth} {...props} />}
      />
      <Route
        exact
        path="/hurricane"
        render={props => <Hurricane auth={auth} {...props} />}
      />
      <Route 
        path="/callback"
        render={props => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} /> 
    </div>
  </Router>
);

export default App;
