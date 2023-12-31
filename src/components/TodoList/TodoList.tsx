import React from "react";
import styled from "./styles/todoList.module.css";
const TodoList = () => {
  const todos = [
    { id: 1, text: "Погулять с собакой" },
    { id: 2, text: "Прочитать книгу" },
  ];

  return (
    <div className={styled.main}>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" />
          <label>{todo.text}</label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
