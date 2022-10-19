import React from 'react';
import './App.scss';
import beers from './data/beers';
import Main from './containers/Main/Main';


const App = () => {
  const beersArr = beers
    .filter((beer) => beer.name);
  
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
          <Main title="Explore" beersArr={beersArr}/>
        </div>
      </main>
    </>
  )
}

export default App