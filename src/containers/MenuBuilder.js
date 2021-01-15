import React, { Component } from "react";

import classes from "./MenuBuilder.module.css";
import Section from "../components/Section/Section";

class MenuBuilder extends Component {
  state = {
    sections: [
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
    ]
  };

  onLableChangeHandler = (e) => {
    const sections = [...this.state.sections];

    console.log(sections[0].items);
  };

  render() {
    return (
      <div className={classes.MenuBuilder}>
        <h1 className='display-1'>MENU TITLE</h1>
        <Section
          {...this.state.sections}
          lableChanged={(e) => this.onLableChangeHandler(e)}
        />
      </div>
    );
  }
}

export default MenuBuilder;
