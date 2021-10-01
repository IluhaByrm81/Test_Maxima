import React from "react";

function DropDawnTwo({ currentInfo }) {
  return (
    <div className="dropdawn">
      {currentInfo ? (
        <div className="dropdawn_content">
          <div className="dropdawn_item">Имя : {currentInfo.name}</div>
          <div className="dropdawn_item">Рост : {currentInfo.height} см</div>
          <div className="dropdawn_item">Вес : {currentInfo.weight} кг</div>
        </div>
      ) : null}
    </div>
  );
}
export default DropDawnTwo;
