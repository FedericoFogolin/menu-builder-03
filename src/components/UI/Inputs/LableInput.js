import React from "react";

import Form from "react-bootstrap/Form";

const lableInput = (props) => {
  const onChange = (event) => {
    props.changed(event, props.id);
    event.preventDefault();
  };

  return (
    <Form>
      <Form.Group>
        <Form.Control
          key={props.id}
          plaintext
          readOnly={props.focused}
          value={props.value}
          type={props.type}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};

export default lableInput;

//className={`form-control-plaintext ${classes.type}`}
