import { getByAltText, render, screen } from "@testing-library/react";  //test that form is rendered correctly on screen
import userEvent from "@testing-library/user-event";

import NavBar from './NavBar';
import SearchBox from '../../components/SearchBox/SearchBox';


// it('should render the Search/Filter panel', () => {
//   render(<SearchBox />);
  
//   const linkElement = screen.getByLabelText(/Search.../i);
//   expect(linkElement).toBeInTheDocument();
// });
