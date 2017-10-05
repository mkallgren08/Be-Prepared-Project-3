import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
    <ul className="nav navbar-nav navbar-right">
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
        <li className={window.location.pathname === "/#" ? "active" : ""}>
            <Link to="/login">Sign-Up/Log-In</Link>
        </li>    
    </ul>;

export default Nav;