import React from 'react';
import "./Main.scss";

const Main = (props) => {
    const {beersArr} = props;
    const localBeersArr = {beersArr};
    console.log (localBeersArr);

  return (
    <>
    <h2>{localBeersArr.name}</h2>    
    
    </>
  )
}

export default Main