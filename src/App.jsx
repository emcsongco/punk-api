import React from 'react';
import './App.scss';
import beers from './data/beers';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';


const App = () => {
  const beersArr = beers
    .filter((beer) => beer.name);
  
  return (
    <>
      <h1 className="app-title">Beer Catalogue</h1>
      <div className="app-container">      
        <nav className="navbar">
          <NavBar />
        </nav>
        <main className="main">
          <div className="card-container">
            <Main title="Explore" beersArr={beersArr}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App