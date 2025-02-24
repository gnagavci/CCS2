// src/components/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

test("adds and deletes todos", () => {
  render(<TodoList />);

  // Add a todo
  const input = screen.getByPlaceholderText(/Add a task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.click(addButton);

  // Check if the todo is displayed
  expect(screen.getByText(/Buy milk/i)).toBeInTheDocument();

  // Delete the todo
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Check if the todo is removed
  expect(screen.queryByText(/Buy milk/i)).not.toBeInTheDocument();
});
