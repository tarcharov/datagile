import React from "react";
import styled from "./styles/todoList.module.css";
import {useAppSelector} from "../../hook";
import TodoItem from "./components/TodoItem/TodoItem"
import {Todo} from "../types";
const TodoList = () => {
  const {todos,filterSort,filterVisibility} = useAppSelector(state => state.todos)

  const todoFiltered = (todo:Todo) => {
    switch(filterVisibility) {
      case "Все":
        return todo
      case "Активные":
        if(!todo.completed) return todo
        break;
      case "Завершённые":
        if(todo.completed) return todo
        break;
      default:
        break;
    }
  }
  const todoSort = (a:Todo,b:Todo) => {
      if(filterSort === "Наименование") return a.text.localeCompare(b.text);
      if(filterSort === "Статус") {
        const A = a.completed ? 1 : 0;
        const B = b.completed ? 1 : 0;
        return A - B;
      }
      return 0;
  }
  return (
    <div className={styled.main}>
      {todos.filter(todoFiltered).sort(todoSort).map((todo) => (
          <TodoItem key={todo.id} {...todo}/>
      ))}
    </div>
  );
};

export default TodoList;
