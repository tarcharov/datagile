import React from "react";
import styled from "./styles/radioButton.module.css";
interface FiltersRadioButtonProps {
  value: string;
}

const FiltersRadioButton = ({ value }: { value: string }) => {
  return (
    <div className={styled.main}>
      <input type="radio" value={value} id={value} name="filters" />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};
export default FiltersRadioButton;
