// src/components/Counter.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments and decrements the counter", () => {
  render(<Counter />);

  // Check initial count
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  // Increment
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

  // Decrement
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
