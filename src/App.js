import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import {} from "./components/Store/todoSlice";

import { TodoList } from "./components/todoList";
import { TodoForm } from "./components/todoForm";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // const addTodo = () => {};
  const onTodoRemove = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onTodoToggle = (id) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== id) return todo;
    //     return {
    //       ...todo,
    //       complited: !todo.complited,
    //     };
    //   })
    // );
  };

  return (
    <div className="App">
      <TodoForm />
      <TodoList onTodoToggle={onTodoToggle} onTodoRemove={onTodoRemove} />
    </div>
  );
}

export default App;
