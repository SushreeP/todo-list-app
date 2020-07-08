import React from "react";

export default function TodoItem(props) {
  const taskCompletedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "lightgrey",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.status}
        onChange={() => props.toggleChecked(props.item.id)}
      />
      <p style={props.item.status ? taskCompletedStyle : null}>
        {props.item.task}
      </p>
    </div>
  );
}
