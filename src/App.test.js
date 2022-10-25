import { fireEvent, getByAltText, render, screen } from "@testing-library/react";  //test that form is rendered correctly on screen
import userEvent from "@testing-library/user-event";

import App from './App';
import NavBar from '../src/containers/NavBar/NavBar';
import Main from '../src/containers/Main/Main';
import BeerCards from '../src/components/BeerCards/BeerCards';
import { findAllInRenderedTree } from "react-dom/test-utils";


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it('should render the Beer Catalogue', () => {
//   render(<App />);
  
//   const linkElement = screen.getByText(/beer catalogue/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('should render the Main Container', () => {
  render(<Main />);

  const linkElement = screen.getByTitle(/Explore/i);  
  findAllInRenderedTree.beersArr.slice(0,beersArr.length);
  expect(linkElement).toBeInTheDocument();
});

// it('should render the Beer Catalogue', () => {
//   render(<NavBar />);
  
//   const linkElement = screen.getByText(/Search.../i);
//   expect(linkElement).toBeInTheDocument();
// });
