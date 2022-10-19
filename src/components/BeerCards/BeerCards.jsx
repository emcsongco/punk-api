import React from 'react';
import './BeerCards.scss';

const BeerCards = (props) => {
    const {title, beersArr} = props;
    console.log(title);
    console.log(beersArr);

    const cardListJSX = beersArr.map((beer, idx) => (
        <div className="beer-card" >
          <img
              className="beer-card__img"
              src={beer.image_url}
              alt={beer.name}
              key={title+(idx+1)}
          />
          <h4 className="beer-name">{beer.name}</h4>
          <p className="beer-desc">{beer.description}</p>
          <h6>ABV: {beer.abv}-----First Brewed In: {beer.first_brewed}-----PH: {beer.ph}</h6>

        </div>
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