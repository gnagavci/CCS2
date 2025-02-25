import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ToggleButton from "./components/ToggleButton";
import UserGreeting from "./components/UserGreeting";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="counter">
        <Counter />
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
      <div className="toggle-button">
        <ToggleButton />
      </div>
      <div className="user-greeting">
        <UserGreeting />
      </div>
    </div>
  );
}

export default App;
