import React from 'react';
import './App.scss';
import beers from './data/beers';



const App = () => {
  const beersArr = beers
    .filter((beer) => beer.name);
    // .map((beer) => beer.name);
  
  return (
    <>
      <h1 className="app-title">Beer Catalogue</h1>

      <nav className="navbar">
        <div className="navbar-options">
          <h2 className="navbar-options__search">Search...</h2>
          <h2 className="navbar-options__filter">Filter:</h2>
            <ul><input type="checkbox" />filter #1</ul>
            <ul><input type="checkbox" />filter #2</ul>
            <ul><input type="checkbox" />filter #3</ul>
        </div>
      </nav>
      <main className="main">
        <div className="card-container">
          <h1 className="beer-name">{beersArr[0].name}</h1>
          <h2 className="beer-tagline">{beersArr[0].tagline}</h2>
          <p className="beer-desc">{beersArr[0].description}</p>
          <img className="beer-img" src={beersArr[0].image_url} alt={beersArr[0].name} />
          <h3 className= "beer-label">Brewer's Tips:</h3>
          <p className = "beer-tips">{beersArr[0].brewers_tips}</p>
        </div>

      </main>
    </>
  )
}

export default App