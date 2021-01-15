import React from "react";

import classes from "./Item.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buttons from "../UI/Buttons";
import LableInput from "../UI/Inputs/LableInput";
import PriceInput from "../UI/Inputs/PriceInput";
import EditLogo from "../UI/EditLogo/EditLogo";

const item = (props) => {
  return (
    <Container className={classes.Item}>
      <Row>
        <Col>
          <EditLogo />
          <p className='lead'>
            <LableInput description={props[0].item} focused={true} />
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className={`small ${classes.Description}`}>
            <LableInput
              type='description'
              description={props[0].description}
              focused={true}
            />
          </p>
        </Col>
        <Col>
          <PriceInput description={props[0].price} focused={true} />
          <label>€</label>
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
