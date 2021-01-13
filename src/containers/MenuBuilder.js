import React, { Component } from "react";

import classes from "./MenuBuilder.module.css";
import Section from "../components/Section/Section";

const sections = [
  {
    section: "Section Title 1",
    items: [
      {
        item: "Item 1",
        description: "Item Description",
        price: 10
      }
    ]
  }
];

class MenuBuilder extends Component {
  render() {
    return (
      <div className={classes.MenuBuilder}>
        <h1 className='display-1'>MENU TITLE</h1>
        <Section {...sections} />
      </div>
    );
  }
}

export default MenuBuilder;
