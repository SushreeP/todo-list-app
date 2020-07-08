import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.status} />
      <p>{props.item.task}</p>
    </div>
  );
}
