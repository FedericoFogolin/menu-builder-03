import React from "react";

import classes from "./Section.module.css";
import Item from "../Item/Item";
import Buttons from "../UI/Buttons";
import LableInput from "../UI/Inputs/LableInput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const section = (props) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col>
          <LableInput
            id='section'
            changed={props.parentCallback}
            value={props[0].section}
            focused={false}
            type='text'
          />
        </Col>
      </Row>
      <Row>
        <Item
          {...props[0].items}
          parentCallback={props.parentCallback}
          lableChanged={props.lableChanged}
        />
      </Row>
    </Container>
  );
};

export default section;
