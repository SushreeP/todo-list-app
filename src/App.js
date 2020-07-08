import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./components/TodosData.js";

class App extends React.Component {
  // Constructor()
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  // Adding functionality to check/uncheck the checkboxes
  toggleChecked(id) {
    this.setState((prevState) => {
      const updatedState = prevState.todos.map((todo) => {
        if (todo.id === id) {
          console.log("found", id);
          todo.status = !todo.status;
          console.log("still working");
        }
        return todo;
      });
      return { todos: updatedState };
    });
  }

  // RENDER()
  render() {
    const todosList = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} toggleChecked={this.toggleChecked} />
    ));

    return <div className="App">{todosList}</div>;
  }
}

export default App;
