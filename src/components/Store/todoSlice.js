import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    removeTodo(state, action) {
      console.log(state);
      console.log(action);
    },
    toggleTodo(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
