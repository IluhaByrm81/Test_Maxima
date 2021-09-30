import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdawn.css";

function Dropdawn() {
  const [activ, setActiv] = useState(false);
  const [select, setSelect] = useState("Выбор файла");

  const options = [
    "file1",
    "file2",
    "file4",
    "file5",
    "file6",
    "file7",
    "file8",
  ];

  return (
    <div className="dropdawn_wraper">
      <div className="dropdawn">
        <Link to="/">
          {" "}
          <button className="btn_one">Назад</button>
        </Link>
        <div className="dropdawn_btn" onClick={() => setActiv(!activ)}>
          {select}
          <span>&#9660;</span>
        </div>
        {activ && (
          <div className="dropdawn_content">
            {options.map((elem) => (
              <div
                className="dropdawn_item"
                onClick={() => {
                  setSelect(elem);
                  setActiv(false);
                }}
              >
                {elem}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Dropdawn;
