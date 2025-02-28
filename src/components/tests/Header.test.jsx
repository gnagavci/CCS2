import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
//import the needed testing libraries and the Header component to test

//Define a test case
test("renders the header text", () => {
  render(<Header />); //render Header component

  // Use the `screen.getByText` method to find an element with the text matching the regex '/Cloud Computing Services 2 Project/i, where the /i flag makes it case-sensitive'
  const headerElement = screen.getByText(/Cloud Computing Services 2 Project/i);

  // Assert that the header element is present in the document, if element is found test passes, if not fails
  expect(headerElement).toBeInTheDocument();
});
