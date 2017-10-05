import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300, width: 400, background: "#333333" }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
