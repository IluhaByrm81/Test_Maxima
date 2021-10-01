import React, { useState, useEffect } from "react";
import { getData, getDataInfo } from "../../Api/api";
import { Link } from "react-router-dom";
import "./Dropdawn.css";
import DropDawnTwo from "./DropDawnTwo";

function Dropdawn() {
  const [activ, setActiv] = useState(false);
  const [data, setData] = useState([]);
  const [dataInfo, setDataInfo] = useState(null);
  const [currentInfo, setCurrentInfo] = useState(null);

  useEffect(() => {
    if (dataInfo) {
      getDataInfo(dataInfo)
        .then((info) => {
          setCurrentInfo(info);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      getData(10, 0)
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [dataInfo]);

  const handleClickSelected = () => {
    setActiv(!activ);
  };
  const clickHandler = (name) => {
    setDataInfo(name);
  };

  return (
    <div className="container">
      <div className="dropdawn_wraper">
        <Link to="/">
          <button className="btn_one">Назад</button>
        </Link>
        <div className="dropdawn">
          <div className="dropdawn_btn" onClick={handleClickSelected}>
            {"Покемоны"} : {dataInfo}
            <span>&#9660;</span>
          </div>
          {activ && (
            <div className="dropdawn_content">
              {data.map((elem) => (
                <div key={elem.name} className="dropdawn_item">
                  <div
                    onClick={() => {
                      clickHandler(elem.name);
                      setActiv(false);
                    }}
                  >
                    {elem.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <DropDawnTwo currentInfo={currentInfo} />
      </div>
    </div>
  );
}
export default Dropdawn;
