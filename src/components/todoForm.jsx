import React from "react";

export const TodoForm = ({ text, onInputChange, onFormSubmit }) => {
  return (
    <label>
      <input
        type="text"
        name="text"
        id="Text"
        value={text}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button type="button" onClick={onFormSubmit}>
        Add todo
      </button>
    </label>
  );
};
