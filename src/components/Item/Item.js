import React from "react";

import classes from "./Item.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buttons from "../UI/Buttons";
import LableInput from "../UI/Inputs/LableInput";
import EditLogo from "../UI/EditLogo/EditLogo";

const item = (props) => {
  return (
    <Container className={classes.Item}>
      <Row>
        <Col>
          <EditLogo />
          <LableInput
            value={props[0].item}
            focused={false}
            type='text'
            changed={props.lableChanged}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <LableInput
            type='text'
            value={props[0].description}
            focused={false}
            changed={props.lableChanged}
          />
        </Col>
        <Col>
          <LableInput
            value={props[0].price}
            focused={false}
            type='number'
            changed={props.lableChanged}
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
