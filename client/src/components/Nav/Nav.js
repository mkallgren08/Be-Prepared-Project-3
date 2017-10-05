import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import AuthButtons from "./AuthButtons";

const Nav = (props) => (
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/profile" ? "active" : ""}>
      <Link to="/profile">My Profile</Link>
    </li>
    <li className={window.location.pathname === "/resource" ? "active" : ""}>
      <Link to="/resource">Resources</Link>
    </li>
    <li className={window.location.pathname === "/blog" ? "active" : ""}>
      <Link to="/blog">Emergency Prep Blog</Link>
    </li>
    <li>
      <AuthButtons auth={props.auth} />
    </li>
  </ul>
);

export default Nav;
