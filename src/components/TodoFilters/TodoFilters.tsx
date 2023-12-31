import React from "react";
import FiltersRadioButton from "../RadioButton/FiltersRadioButton";
import SortSelect from "../SortSelect/SortSelect";
import styled from "./styles/todoFilters.module.css";
const filters = ["Все", "Активные", "Завершенные"];
const sortFilters = ["Наименование", "Статус"];
const TodoFilters = () => {
  return (
    <div className={styled.main}>
      <span>Статус</span>
      {filters.map((val) => (
        <FiltersRadioButton value={val} />
      ))}
      <SortSelect sortFilters={sortFilters} />
    </div>
  );
};

export default TodoFilters;
