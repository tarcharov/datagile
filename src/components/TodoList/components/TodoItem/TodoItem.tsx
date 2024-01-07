import React, { FC } from "react";
import { useAppDispatch } from "../../../../hook";
import { toggleTodo, deleteTodo } from "../../../../store/todoSlice";
import styled from "./styles/todoItem.module.css";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/deleteToDoIcon.svg";
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styled.main} key={id}>
      <input
        className={styled.checkBox}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <label className={styled.label}>{text}</label>
      <div className={styled.deleteIcon}>
        <DeleteIcon
          width="20"
          height="20"
          onClick={() => dispatch(deleteTodo(id))}
        ></DeleteIcon>
      </div>
    </div>
  );
};

export default TodoItem;
