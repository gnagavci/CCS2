// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ToggleButton from "./components/ToggleButton";
import UserGreeting from "./components/UserGreeting";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <TodoList />
      <ToggleButton />
      <UserGreeting />
    </div>
  );
}

export default App;
