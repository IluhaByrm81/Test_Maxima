import React from "react";
import "./Buttons.scss";

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
      <button onClick={handelClickModalOne}>Кнопка 1</button>
      <button onClick={handelClickModalTwo}>Кнопка 2</button>
    </div>
  );
}
export default ButtonOne;
