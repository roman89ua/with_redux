import React from "react";

export const TodoItem = ({ todo, onTodoToggle, onTodoRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complited}
        name="todo"
        id={todo.id}
        onChange={() => onTodoToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <span style={{ color: "red" }} onClick={() => onTodoRemove(todo.id)}>
        &times;
      </span>
    </li>
  );
};
