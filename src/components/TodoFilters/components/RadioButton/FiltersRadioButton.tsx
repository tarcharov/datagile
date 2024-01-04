import React, {FC} from "react";
import styled from "./styles/radioButton.module.css";
interface FiltersRadioButtonProps {
  value: string;
}

const FiltersRadioButton: FC<FiltersRadioButtonProps> = ({value}) => {
  return (
    <div className={styled.main}>
      <input type="radio" value={value} id={value} name="filters" />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};
export default FiltersRadioButton;
