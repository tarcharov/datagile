import React, { useState } from "react";
import FiltersRadioButton from "./components/RadioButton/FiltersRadioButton";
import SortSelect from "./components/SortSelect/SortSelect";
import styled from "./styles/todoFilters.module.css";
const radioFilters = ["Все", "Активные", "Завершённые"];

const TodoFilters = () => {
  const [value, setValue] = useState("Все");
  const handleRadioChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className={styled.main}>
      <div className={styled.radioButtonsWrapper}>
        <span className={styled.span}>Статус</span>
        {radioFilters.map((text) => (
          <FiltersRadioButton
            value={text}
            handleRadioChange={handleRadioChange}
            checked={value === text}
          />
        ))}
      </div>
      <SortSelect />
    </div>
  );
};

export default TodoFilters;
