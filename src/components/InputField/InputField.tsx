import React, { useState } from "react";
import styled from "./styles/inputField.module.css";
import { addTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../hook";

const InputField = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const handleTodoAdd = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className={styled.main}>
      <span className={styled.inputName}>Новая задача</span>
      <input
        className={styled.todoInput}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styled.todoAddBtn} onClick={handleTodoAdd}>
        <span className={styled.todoAddBtnPlus}>+</span>Добавить
      </button>
    </div>
  );
};

export default InputField;
