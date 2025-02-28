import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";
//import the needed testing libraries and the Todolist component to test

test("adds and deletes todos", () => {
  render(<TodoList />);

  // Add a todo task by getting the input and the button, and then adding "Buy milk" task and clicking the button
  const input = screen.getByPlaceholderText(/Add a task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.click(addButton);

  // Check if the todo is displayed, if yes, test passes
  expect(screen.getByText(/Buy milk/i)).toBeInTheDocument();

  // Delete the todo
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Check if the todo is removed, if yes, test passes
  expect(screen.queryByText(/Buy milk/i)).not.toBeInTheDocument();
});
