import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

function ButtonTwo() {
  return (
    <div className="box_btn">
      <button className="btn_one"> Кнопка 3</button>
      <button className="btn_two"> Кнопка 4</button>
      <Link to="/dropdawn">
        <button className="btn_two">DropDawn</button>
      </Link>
    </div>
  );
}
export default ButtonTwo;
