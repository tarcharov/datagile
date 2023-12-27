import React from 'react';
import styled from "./styles/InputField.module.css"
const InputField = () => {
    return (
        <div className={styled.main}>
            <span className={styled.inputName}>Новая задача</span>
            <input className={styled.todoInput} type="text" placeholder=""/>
            <button className={styled.todoAddBtn}><span className={styled.todoAddBtnPlus}>+</span>Добавить</button>
        </div>
    );
};

export default InputField;