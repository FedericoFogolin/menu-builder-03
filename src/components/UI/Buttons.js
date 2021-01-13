import React from "react";

import classes from "./Buttons.module.css";

const button = (props) => {
  return (
    <div className={`btn-toolbar ${classes.Toolbar}`} role='group'>
      <button
        type='button'
        className={`btn btn-outline-secondary ${classes.ButtonCircle}`}
      >
        -
      </button>
      <button
        type='button'
        className={`btn btn-outline-secondary mx-1 ${classes.ButtonCircle}`}
      >
        +
      </button>
    </div>
  );
};

export default button;
