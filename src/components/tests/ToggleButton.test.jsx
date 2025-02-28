import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleButton from "../ToggleButton";
//import the needed testing libraries and the Todolist component to test

test("toggles the button state", () => {
  render(<ToggleButton />);

  // Check initial state parameter, button being off and the text showing "The button is OFF"
  const button = screen.getByRole("button", { name: /Off/i });
  expect(button).toHaveTextContent("Off");
  expect(screen.getByText(/The button is OFF/i)).toBeInTheDocument();

  // Toggle to "On", check if the text and button text have correctly changed
  fireEvent.click(button);
  expect(button).toHaveTextContent("On");
  expect(screen.getByText(/The button is ON/i)).toBeInTheDocument();

  // Toggle back to "Off", check if the text and the button text have correctly changed
  fireEvent.click(button);
  expect(button).toHaveTextContent("Off");
  expect(screen.getByText(/The button is OFF/i)).toBeInTheDocument();
});
