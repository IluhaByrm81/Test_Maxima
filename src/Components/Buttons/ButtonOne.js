import React from "react";
import "./Buttons.css";

function ButtonOne(props) {
  const { setModalOne, setModalTwo } = props;

  const handelClickModalOne = () => {
    setModalOne(true);
  };

  const handelClickModalTwo = () => {
    setModalTwo(true);
  };

  return (
    <div className="box_btn">
      <button className="btn_one" onClick={handelClickModalOne}>
        Кнопка 1
      </button>
      <button className="btn_two" onClick={handelClickModalTwo}>
        Кнопка 2
      </button>
    </div>
  );
}
export default ButtonOne;
