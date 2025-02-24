// src/components/UserGreeting.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserGreeting from "../UserGreeting";

test("displays greeting when form is submitted", () => {
  render(<UserGreeting />);

  // Enter a name
  const input = screen.getByPlaceholderText(/Enter your name/i);
  const submitButton = screen.getByRole("button", { name: /Greet Me/i });

  fireEvent.change(input, { target: { value: "Alice" } });
  fireEvent.click(submitButton);

  // Check if the greeting is displayed
  expect(screen.getByText(/Hello, Alice!/i)).toBeInTheDocument();
});

test("does not display greeting if input is empty", () => {
  render(<UserGreeting />);

  // Submit without entering a name
  const submitButton = screen.getByRole("button", { name: /Greet Me/i });
  fireEvent.click(submitButton);

  // Check that no greeting is displayed
  expect(screen.queryByText(/Hello,/i)).not.toBeInTheDocument();
});
