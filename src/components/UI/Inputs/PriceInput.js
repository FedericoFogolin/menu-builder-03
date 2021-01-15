import React from "react";

import classes from "./PriceInput.module.css";
import Aux from "../../../hoc/Aux/Aux";

const priceInput = (props) => {
  return (
    <Aux>
      <input
        type='number'
        className={`form-control-plaintext ${classes.PriceInput}`}
        value={props.description}
        readOnly={props.focused}
      />
    </Aux>
  );
};

export default priceInput;
