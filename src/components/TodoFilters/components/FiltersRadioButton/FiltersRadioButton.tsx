import React, { FC } from "react";
import styled from "./styles/radioButton.module.css";
interface FiltersRadioButtonProps {
  value: string;
  checked: boolean;
  handleRadioChange: (value: string) => void;
}

const FiltersRadioButton: FC<FiltersRadioButtonProps> = ({
  value,
  checked,
  handleRadioChange,
}) => {
  return (
    <div className={styled.main}>
      <input
        className={styled.radio}
        type="radio"
        value={value}
        id={value}
        name="filters"
        checked={checked}
        onChange={(e) => handleRadioChange(e.target.value)}
      />
      <label className={styled.label} htmlFor={value}>{value}</label>
    </div>
  );
};
export default FiltersRadioButton;
