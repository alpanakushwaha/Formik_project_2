import React from "react";

function TextError(props) {
  return <div className="error text-color-red">{props.children}</div>;
}

export default TextError;
