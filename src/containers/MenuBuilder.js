import React, { Component } from "react";

import classes from "./MenuBuilder.module.css";
import Section from "../components/Section/Section";
import Buttons from "../components/UI/Buttons";

class MenuBuilder extends Component {
  render() {
    return (
      <div className={classes.MenuBuilder}>
        <h1 className='display-1'>MENU TITLE</h1>
        <Section />
      </div>
    );
  }
}

export default MenuBuilder;
