import React, {useState} from 'react';
import "./NavBar.scss";
import FilterList from '../../components/FilterList/FilterList';
import beers from "../../data/beers";

import SearchBox from '../../components/SearchBox/SearchBox';

console.log (beers);

const filtersList = [
  "ABV value > 6%",
  "Classic Range",
  "Acidic (pH < 4)",
];

console.log (filtersList);

const NavBar = (props) => {
    
    const { searchTerm, handleInput, filterArr, toggleCheckedFilter } = props;

    const filterJSX = filterArr.map((filter) => {
        return (
          <div key={filter.id} className="filter">
            <FilterList
              label={filter.text}
              value={filter.checked}
              onChange={toggleCheckedFilter}
              filterId={filter.id}
            />
          </div>
        );
      });


  return (

    <>
        <div className="navbar-options">
            <SearchBox
                label={"Search..."}
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            {filterJSX}
        </div>
    </>
  )
}

export default NavBar