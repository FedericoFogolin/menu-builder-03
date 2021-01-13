import React from "react";

import classes from "./Section.module.css";
import Item from "../Item/Item";
import Buttons from "../UI/Buttons";

const section = (props) => {
  return (
    <div>
      <div className={classes.SectionTitle}>
        <h1 className='display-3'>Section Title</h1>
        <Buttons />
      </div>
      <Item />
    </div>
  );
};

export default section;
