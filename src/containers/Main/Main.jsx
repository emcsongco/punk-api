import React from 'react';
import "./Main.scss";
import BeerCards from '../../components/BeerCards/BeerCards';

const Main = (props) => {
    const {beersArr} = props;
    console.log ({beersArr});


  return (
    <>
    <section className="cards-list">
      <h2 className="cards-list__heading">Explore Catalog</h2>
      <div className="all-beers">
        <BeerCards title="Explore" beersArr={beersArr.slice(0,beersArr.length)}/>
      </div>
    </section>
    </>    
  )
}

export default Main