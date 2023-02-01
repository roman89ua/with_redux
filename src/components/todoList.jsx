import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./todoItem";

export const TodoList = ({ onTodoToggle, onTodoRemove }) => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoToggle={onTodoToggle}
          onTodoRemove={onTodoRemove}
        />
      ))}
    </ul>
  );
};
