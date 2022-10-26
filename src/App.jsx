import React, {useState, useEffect} from 'react';
import './App.scss';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

const App = () => {
// ===========================================================
// vars, useStates

  const filtersList = [
    {id: 1, text: "High ABV > 6%", checked: false},
    {id: 2, text: "Classic Range (< 2010)", checked: false},
    {id: 3, text: "Acidic (ph < 4)", checked: false},
  ];

  const [searchTerm, setSearchTerm] = useState([]);
  const [filterArr, updateFilterArr] = useState(filtersList);

  // ===========================================================
  // API CODE

  const url = "https://api.punkapi.com/v2/beers";
  const [beerArr,SetBeerArr] = useState([]);
  const [pageCtr,SetPageCtr] = useState(1);
  const [perPageCtr,SetPerPageCtr] = useState(80);
  console.log (pageCtr);
  console.log (perPageCtr);

  useEffect(() => {
    getBeersByPage();
    },[]
  );

   const getBeersByPage = async () => {
    let res = await fetch (`${url}?page=${pageCtr}&per_page=${perPageCtr}`);
    const data = await res.json();
    const beers = data.filter((beer) => beer.name);
    SetBeerArr(beers);
    console.log (beers);
    console.log (beerArr);
    console.log (res);
   }

   const beersArr = beerArr.filter((beer) => {
    const beersNameLower = beer.name.toLowerCase();

    return beersNameLower.includes(searchTerm)
         && (filterArr[0].checked ? beer.abv > 6: true )
         && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
         && (filterArr[2].checked ? beer.ph < 4: true )
  });

// ===========================================================

  const toggleCheckedFilter = (filterId) => {
    const updatedFilterArr = filterArr.map(filter => 
       filter.id === filterId ? {...filter, checked: !filter.checked} : {...filter}
      )
    updateFilterArr (updatedFilterArr)
    console.log (updatedFilterArr);
  }

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // ===========================================================
  
  return (
    <>
      <h1 className="app-title">Beer Catalogue</h1>
      <div className="app-container">      
        <nav className="navbar">
        <NavBar 
          searchTerm={searchTerm} 
          handleInput={handleInput} 
          filterArr={filterArr} 
          toggleCheckedFilter={toggleCheckedFilter}/>
        </nav>
        <main className="main">
          <div className="card-container">
            <Main title="Explore" beersArr={beersArr} pageCtr={pageCtr} perPageCtr={perPageCtr}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App