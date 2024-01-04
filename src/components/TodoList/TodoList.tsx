import React from "react";
import styled from "./styles/todoList.module.css";
import {useAppSelector} from "../../hook";
import TodoItem from "./components/TodoItem/TodoItem"
const TodoList = () => {
  const todos = useAppSelector(state => state.todos.todos)
  return (
    <div className={styled.main}>
      {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo}/>
      ))}
    </div>
  );
};

export default TodoList;
