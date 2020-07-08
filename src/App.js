import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./components/TodosData.js";

function App() {
  const todosList = todosData.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  return <div className="App">{todosList}</div>;
}

export default App;
