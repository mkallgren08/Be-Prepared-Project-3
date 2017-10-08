import React from "react";
import FormBtn from './FormBtn';
import TextArea from './TextArea'

export const Input = props =>
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>;