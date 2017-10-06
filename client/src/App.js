import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Resource from "./pages/Resource";
import Hurricane from "./pages/Hurricane";
import Nav from "./components/Nav";
<<<<<<< HEAD
import Auth from "./auth/auth";
import Callback from "./Callback/Callback";
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router>
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
=======
import EmergencyForm from "./pages/EmergencyForm";
import Auth from './auth/auth';


const auth = new Auth();


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

>>>>>>> 2d0f2b142bdec69cc88c25cf371c32e3a048bb71
    </div>
  </Router>
);

export default App;
