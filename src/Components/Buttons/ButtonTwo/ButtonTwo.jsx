import React from "react";
import { Link } from "react-router-dom";
import "../Buttons.scss";

export const ButtonTwo = () => {
  return (
    <div className="box_btn">
      <button> Кнопка 3</button>
      <button> Кнопка 4</button>
      <Link to="/dropdawn">
        <button>DropDawn</button>
      </Link>
    </div>
  );
}
