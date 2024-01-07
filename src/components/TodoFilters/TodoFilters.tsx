import React, { useState } from "react";
import FiltersRadioButton from "./components/FiltersRadioButton/FiltersRadioButton";
import SortSelect from "./components/SortSelect/SortSelect";
import styled from "./styles/todoFilters.module.css";
import {setVisibilityFilter} from "../../store/todoSlice";
import {useAppDispatch} from "../../hook";
const radioFilters = ["Все", "Активные", "Завершённые"];

const TodoFilters = () => {
  const [value, setValue] = useState("Все");
    const dispatch = useAppDispatch();
  const handleRadioChange = (value: string) => {
    setValue(value);
    dispatch(setVisibilityFilter(value));
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
