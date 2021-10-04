import React from "react";
import "../Buttons.scss";

export const ButtonOne = ({ handleClickModalOneOpen, handleClickModalTwoOpen }) => {
  return (
    <div className="box_btn">
      <button onClick={handleClickModalOneOpen}>Кнопка 1</button>
      <button onClick={handleClickModalTwoOpen}>Кнопка 2</button>
    </div>
  );
}
