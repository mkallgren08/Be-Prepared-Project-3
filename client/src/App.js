<<<<<<< HEAD

=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Resource from "./pages/Resource";
import Drone from "./pages/Drone";
import Hurricane from "./pages/Hurricane";
import Nav from "./components/Nav";



const App = () => 
  <Router>
    <div>
      <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/resource" component={Resource} />
        <Route exact path="/drone" component={Drone} />
        <Route exact path="/hurricane" component={Hurricane} />

    </div>
  </Router>;

export default App;
>>>>>>> fe53908dff47c858ac3130ff2ab55b435792d937
