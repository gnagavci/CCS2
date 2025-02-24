import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleButton from "../ToggleButton";

test("toggles the button state", () => {
  render(<ToggleButton />);

  // Initial state
  const button = screen.getByRole("button", { name: /Off/i });
  expect(button).toHaveTextContent("Off");
  expect(screen.getByText(/The button is OFF/i)).toBeInTheDocument();

  // Toggle to "On"
  fireEvent.click(button);
  expect(button).toHaveTextContent("On");
  expect(screen.getByText(/The button is ON/i)).toBeInTheDocument();

  // Toggle back to "Off"
  fireEvent.click(button);
  expect(button).toHaveTextContent("Off");
  expect(screen.getByText(/The button is OFF/i)).toBeInTheDocument();
});
