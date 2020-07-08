import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./components/TodosData.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  render() {
    const todosList = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} toggleChecked={this.toggleChecked} />
    ));

    return <div className="App">{todosList}</div>;
  }
}

export default App;
