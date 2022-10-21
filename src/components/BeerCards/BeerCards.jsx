import React from 'react';
import './BeerCards.scss';

const BeerCards = (props) => {
    const {title, beersArr} = props;
    console.log(title);
    console.log(beersArr);

    // const shortenDescription = beersArr.map((beer,idx) => {
    //   const lastSentenceIndex = beer.description.indexOf(".", 300) + 1;
    //   const shortenedText = beer.description.substring(0, lastSentenceIndex);
    // })

    const cardListJSX = beersArr.map((beer, idx, shortenedText) => 
    (
        <div className="beer-card" >
          <h2 className="beer-name">{beer.name}</h2>
          <p className="beer-tagline">"{beer.tagline}"</p>
          <div className="beer-imgbox">
            <img
                className="beer-card__img"
                src={beer.image_url}
                alt={beer.name}
                key={title+(idx+1)}
            />
          </div>
          <div className="beer-stats">
            <div className="stat-item">ABV: {beer.abv}</div>
            <div className="stat-item">First Brewed In: {beer.first_brewed}</div>
            <div className="stat-item">PH: {beer.ph}</div>
          </div>
          <p className="beer-desc">{beer.description}</p>
          {/* <p className="beer-desc">{shortenedText}</p> */}
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