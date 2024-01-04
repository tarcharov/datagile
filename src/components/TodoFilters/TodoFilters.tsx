import React from "react";
import FiltersRadioButton from "./components/RadioButton/FiltersRadioButton";
import SortSelect from "./components/SortSelect/SortSelect";
import styled from "./styles/todoFilters.module.css";
const radioFilters = ["Все", "Активные", "Завершенные"];
const sortFilters = ["Наименование", "Статус"];
const TodoFilters = () => {
  return (
    <div className={styled.main}>
        <div className={styled.radioButtonsWrapper}>
            <span className={styled.span}>Статус</span>
            {radioFilters.map((val) => (
                <FiltersRadioButton value={val} />
            ))}
        </div>
      <SortSelect sortFilters={sortFilters} />
    </div>
  );
};

export default TodoFilters;
