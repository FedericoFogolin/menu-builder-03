import React from "react";

import classes from "./Item.module.css";
import Buttons from "../UI/Buttons";
import LableInput from "../UI/Inputs/LableInput";
import PriceInput from "../UI/Inputs/PriceInput";
import EditLogo from "../UI/EditLogo/EditLogo";

const item = (props) => {
  return (
    <div className={`container ${classes.Item}`}>
      <div className='row'>
        <div className='col'>
          <EditLogo />
          <p className='lead'>
            <LableInput description={props[0].item} focused={true} />
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <p className={`small ${classes.Description}`}>
            <LableInput
              type='description'
              description={props[0].description}
              focused={true}
            />
          </p>
        </div>
        <div className='col'>
          <PriceInput description={props[0].price} focused={true} />
          <label>€</label>
        </div>
        <div className='col'>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default item;

//TODO #2
//create logic for the edit button
