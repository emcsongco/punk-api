import React, {useState, useEffect} from 'react';
import "./Main.scss";
import BeerCards from '../../components/BeerCards/BeerCards';
import PageDisplay from '../../components/PageDisplay/PageDisplay';

const Main = (props) => {
    const { beersArr} = props;
    let [countStart,SetCountStart] = useState(0);
    let [countEnd,SetCountEnd] = useState(8);

    console.log ({beersArr});
    console.log (countStart);
    console.log (countEnd);

    useEffect(() => initSlice(), [beersArr]);
    console.log(beersArr)
  
    const initSlice = () => {
      SetCountStart(0);
      SetCountEnd(8);
    }

    const handleIncrement = () => {
      if(countStart === 72) {
        SetCountStart(0);
        SetCountEnd(8);
      } else {
        SetCountStart(countStart + 8);
        SetCountEnd(countEnd + 8);
      }
      console.log(countStart);
      console.log(countEnd);
    };
  
    const handleDecrement = () => {
      if (countStart === 0) {
        SetCountEnd(80);
        SetCountStart(72); 
      } else {
        SetCountStart(countStart - 8);
        SetCountEnd(countEnd - 8);
      }
      console.log(countStart);
      console.log(countEnd);
    };


  return (
    <>
    <section className="cards-list">
      <h2 className="cards-list__heading">Explore</h2>
      <div className="all-beers">
        <PageDisplay handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        <BeerCards title="Explore" beersArr={beersArr.slice(countStart,countEnd)}/>      
      </div>
    </section>
    </>    
  )
}

export default Main