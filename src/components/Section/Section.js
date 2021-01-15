import React from "react";

import classes from "./Section.module.css";
import Item from "../Item/Item";
import Buttons from "../UI/Buttons";

const section = (props) => {
  return (
    <div>
      <div className={classes.SectionTitle}>
        <h1 className='display-3'>{props[0].section}</h1>
        <Buttons />
      </div>
      <Item {...props[0].items} lableChanged={props.lableChanged} />
    </div>
  );
};

export default section;
