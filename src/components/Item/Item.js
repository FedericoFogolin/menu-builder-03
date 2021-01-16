import React from "react";

import classes from "./Item.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buttons from "../UI/Buttons";
import LableInput from "../UI/Inputs/LableInput";

const item = (props) => {
  return (
    <Container className={classes.Item}>
      <Row>
        <Col>
          <LableInput
            id='item'
            changed={props.parentCallback}
            value={props[0].item}
            focused={false}
            type='text'
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <LableInput
            id='description'
            changed={props.parentCallback}
            type='text'
            value={props[0].description}
            focused={false}
          />
        </Col>
        <Col>
          <LableInput
            id='price'
            changed={props.parentCallback}
            value={props[0].price}
            focused={false}
            type='number'
          />
        </Col>
        <Col className='col'>
          <Buttons />
        </Col>
      </Row>
    </Container>
  );
};

export default item;

//TODO #2
//create logic for the edit button
