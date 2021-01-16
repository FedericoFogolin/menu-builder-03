import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import classes from "./LableInput.module.css";

const lableInput = (props) => {
  const onChange = (event) => {
    props.changed(event, props.id);
    event.preventDefault();
  };

  return (
    <Form>
      <Col xs='auto'>
        <Form.Control
          className={props.id === "section" ? classes.SectionTitle : ""}
          key={props.id}
          plaintext
          readOnly={props.focused}
          value={props.value}
          type={props.type}
          onChange={onChange}
        />
      </Col>
    </Form>
  );
};

export default lableInput;

//className={`form-control-plaintext ${classes.type}`}
