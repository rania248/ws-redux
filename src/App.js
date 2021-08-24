import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodosList from "./Components/TodoList/TodoList";

function App() {
  const [complete, setComplete] = useState("all");

  return (
    <div className="App">
      <header>
        <h1>Checkpoint Redux</h1>
        <h1>
          <strong>T</strong>o<strong>D</strong>o<strong>A</strong>pp
        </h1>
        <AddTodo setComplete={setComplete} />
        <TodosList complete={complete} />
      </header>
    </div>
  );
}

export default App;
