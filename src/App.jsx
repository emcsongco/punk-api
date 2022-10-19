import React, {useState} from 'react';
import './App.scss';
import beers from './data/beers';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';


const App = () => {
  // const beersArr = beers
  //   .filter((beer) => beer.name);

  const filtersList = [
    {id: 1, text: "High ABV > 6%", checked: false, field: "abv", operator: ">", value: 6 },
    {id: 2, text: "Classic Range (< 2010)", checked: false, field: "first_brewed", operator: "<", value: 2010 },
    {id: 3, text: "Acidic (ph < 4)", checked: false, field: "ph", operator: "<", value: 4 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterArr, updateFilterArr] = useState(filtersList);

  const beersArr = beers.filter((beer) => {
    const beersNameLower = beer.name.toLowerCase();

    return beersNameLower.includes(searchTerm)
         && (filterArr[0].checked ? beer.abv > 6: true )
         && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
         && (filterArr[2].checked ? beer.ph < 4: true )
  });


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
          {/* <NavBar beersArr={beersArr}/> */}
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