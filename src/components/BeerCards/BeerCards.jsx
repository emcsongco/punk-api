import React from 'react';
import './BeerCards.scss';

const BeerCards = (props) => {
    const {title, beersArr} = props;
    console.log(title);
    console.log(beersArr);

    const cardListJSX = beersArr.map((beer, idx) => (
        <img
            className="beer-card___img"
            src={beer.image_url}
            alt={beer.name}
            key={title+(idx+1)}
        />
    ));
    console.log(cardListJSX);
  return (
    <>
        <div className="beer-cards">{cardListJSX}</div>
    </>
  );
  console.log ({cardListJSX});
};

export default BeerCards;