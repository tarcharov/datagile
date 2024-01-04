import React, {FC} from "react";
import styled from "./styles/sortSelect.module.css"
interface SortSelectProps {
  sortFilters: string[];
}
const SortSelect:FC<SortSelectProps> = ({ sortFilters }) => {
  return (
    <div className={styled.main}>
      <label className={styled.label} htmlFor="sort">Сортировка</label>
      <select id="sort" name="sort">
        {sortFilters.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
