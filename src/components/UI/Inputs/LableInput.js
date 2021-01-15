import React from "react";

const lableInput = (props) => {
  return (
    <input
      type='text'
      className='form-control-plaintext'
      value={props.description}
      readOnly={props.focused}
    />
  );
};

export default lableInput;

//className={`form-control-plaintext ${classes.type}`}
