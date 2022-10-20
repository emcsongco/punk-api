import React, {useState, useEffect} from 'react';
import './App.scss';
// import beers from './data/beers';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

const App = () => {
// ===========================================================
  
  const filtersList = [
    {id: 1, text: "High ABV > 6%", checked: false, field: "abv", operator: ">", value: 6 },
    {id: 2, text: "Classic Range (< 2010)", checked: false, field: "first_brewed", operator: "<", value: 2010 },
    {id: 3, text: "Acidic (ph < 4)", checked: false, field: "ph", operator: "<", value: 4 },
  ];

  const [searchTerm, setSearchTerm] = useState([]);
  const [filterArr, updateFilterArr] = useState(filtersList);

  // ===========================================================
  // API CODE

  const url = "https://api.punkapi.com/v2/beers";
  const [beerArr,SetBeerArr] = useState([]);
  const [pageCtr,SetPageCtr] = useState(1);
  const [perPageCtr,SetperPageCtr] = useState(80);

  // useEffect(() => {
  //   getBeers();
  //   },[]
  // );

  // const getBeers = async () => {
  //   const res = await fetch (url);
  //   const data = await res.json();
  //   const beers = data.filter((beer) => beer.name);
  //   SetBeerArr(beers);
  //   console.log (beers);
  //   console.log (beerArr);
  //  }

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
   }

   const beersArr = beerArr.filter((beer) => {
    const beersNameLower = beer.name.toLowerCase();

    return beersNameLower.includes(searchTerm)
         && (filterArr[0].checked ? beer.abv > 6: true )
         && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
         && (filterArr[2].checked ? beer.ph < 4: true )
  });

// ===========================================================
  
  // const beersArr = beers.filter((beer) => {
  //   const beersNameLower = beer.name.toLowerCase();

  //   return beersNameLower.includes(searchTerm)
  //        && (filterArr[0].checked ? beer.abv > 6: true )
  //        && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
  //        && (filterArr[2].checked ? beer.ph < 4: true )
  // });

  const toggleCheckedFilter = (filterId) => {
    const updatedFilterArr = filterArr.map(filter => 
       filter.id === filterId ? {...filter, checked: !filter.checked} : {...filter}
      )
    updateFilterArr (updatedFilterArr)
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
            <Main title="Explore" beersArr={beersArr}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App