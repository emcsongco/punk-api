import React from 'react';
import './NavBar.scss';

const NavBar = () => {

  return (
    <>
        <div className="navbar-options">
            <h2 className="navbar-options__search">Search...</h2>
            <h2 className="navbar-options__filter">Filter:</h2>
              <ul><input className="navbar-options__filter-item" type="checkbox" />High ABV (greater than 6.0%)</ul>
              <ul><input className="navbar-options__filter-item" type="checkbox" />Classic Range</ul>
              <ul><input className="navbar-options__filter-item" type="checkbox" />Acidic (ph less than 4)</ul>
        </div>
    </>
  )
}



export default NavBar