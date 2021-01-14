import React from "react";

import classes from "./PriceInput.module.css";

const priceInput = (props) => {
  return (
    <input
      type='number'
      className='form-control-plaintext'
      className={`form-control-plaintext ${classes.PriceInput}`}
      value={props.description}
      readOnly={props.focused}
    />
  );
};

export default priceInput;
