import React, { FC, useState } from "react";
import styled from "./styles/sortSelect.module.css";
import { setSortFilter } from "../../../../store/todoSlice";
import { useAppDispatch } from "../../../../hook";

const sortFilters = ["Наименование", "Статус"];

const SortSelect: FC = () => {
  const [value, setValue] = useState("Наименование");
  const dispatch = useAppDispatch();
  const handleRadioChange = (value: string) => {
    setValue(value);
    dispatch(setSortFilter(value));
  };
  return (
    <div className={styled.main}>
      <label className={styled.label} htmlFor="sort">
        Сортировка
      </label>
      <select
        id="sort"
        name="sort"
        className={styled.select}
        onChange={(e) => handleRadioChange(e.target.value)}
      >
        {sortFilters.map((text) => (
          <option key={text} value={text} selected={value === text}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
