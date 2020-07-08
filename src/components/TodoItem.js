import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.status}
        onChange={() => props.toggleChecked(props.item.id)}
      />
      <p>{props.item.task}</p>
    </div>
  );
}
