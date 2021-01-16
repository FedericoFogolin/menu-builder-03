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

  onLableChangeHandler = (e, labelType) => {
    const sections = [...this.state.sections];

    switch (labelType) {
      case "item":
        sections[0].items[0].item = e.target.value;
        return this.setState({
          sections: sections
        });

      case "description":
        sections[0].items[0].description = e.target.value;
        return this.setState({
          sections: sections
        });

      case "price":
        sections[0].items[0].price = e.target.value;
        return this.setState({
          sections: sections
        });
      default:
        return this.state;
    }
  };

  render() {
    return (
      <div className={classes.MenuBuilder}>
        <h1 className='display-1'>MENU TITLE</h1>
        <Section
          {...this.state.sections}
          parentCallback={this.onLableChangeHandler}
        />
      </div>
    );
  }
}

export default MenuBuilder;
