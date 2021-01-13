import React from "react";

import classes from "./Item.module.css";
import Buttons from "../UI/Buttons";

const item = (props) => {
  return (
    <div className={classes.Item}>
      <p className='lead'>
        <strong>Item 1</strong>
      </p>
      <p>
        <em>Item Description</em>
      </p>
      <p className={classes.Price}>10 €</p>
      <Buttons />
    </div>
  );
};

export default item;
