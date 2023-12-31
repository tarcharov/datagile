import React from "react";
interface SortSelectProps {
  sortFilters: string[];
}
const SortSelect = ({ sortFilters }: SortSelectProps) => {
  return (
    <form>
      <label htmlFor="sort">Сортировка</label>
      <select id="sort" name="sort">
        {sortFilters.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SortSelect;
