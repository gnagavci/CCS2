import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders the header text", () => {
  render(<Header />);
  const headerElement = screen.getByText(/My Vite React App/i);
  expect(headerElement).toBeInTheDocument();
});
