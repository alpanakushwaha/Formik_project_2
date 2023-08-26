import React from "react";
import { Field, ErrorMessage } from "formik";
function TextArea() {
  const { label, name, ...rest } = props;
  return <div className="form-control">
<label htmlFor={name}>{label}</label>
  </div>;
}

export default TextArea;
