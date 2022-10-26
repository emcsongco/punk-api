import React from 'react';
import "./PageDisplay.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";


const PageDisplay = (props) => {
    let {handleIncrement, handleDecrement} = props;

      return (
        <div className="page-display">
          <img
            src={leftArrow}
            alt="left arrow"
            onClick={handleDecrement}
            className="page-display__arrow page-display__arrow--left"
          />
          <img 
            src={rightArrow}
            alt="right arrow"
            onClick={handleIncrement}
            className="page-display__arrow page-display__arrow--right"
          />
        </div>
      );
    };

export default PageDisplay