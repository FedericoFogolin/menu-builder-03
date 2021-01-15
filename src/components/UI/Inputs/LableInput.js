import React from "react";

import Form from "react-bootstrap/Form";

const lableInput = (props) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          plaintext
          readOnly={props.focused}
          value={props.value}
          type={props.type}
          onChange={props.changed}
        />
      </Form.Group>
    </Form>
  );
};

export default lableInput;

//className={`form-control-plaintext ${classes.type}`}
