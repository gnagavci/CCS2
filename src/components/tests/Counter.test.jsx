import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
//import the needed testing libraries and the Counter component to test

test("increments and decrements the counter", () => {
  render(<Counter />);

  // Check initial count, if the count paragraph element is there test passes, otherwise fail
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  // Test increment, first get and click increment button, then search for count: 1, if found, test passes, otherwise fail
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

  //current count is 1

  // Test decrement, first get and click decrement button, then search for count: 0, if found, test passes, otherwise fail
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
