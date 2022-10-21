import { getByAltText, render, screen } from "@testing-library/react";  //test that form is rendered correctly on screen
import userEvent from "@testing-library/user-event";

import App from './App';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('should render the Beer Catalogue', () => {
  render(<App />);
  const linkElement = screen.getByText(/beer catalogue/i);
  expect(linkElement).toBeInTheDocument();
});
