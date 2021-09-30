import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import ModalOne from "../Modal/ModalOne/ModalOne";
import ModalTwo from "../Modal/ModalTwo/ModalTwo";
import "./MainPage.css";

function MainPage() {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [view, setView] = useState(true);

  return (
    <div className="wraper">
      {view ? (
        <div className="box_btn">
          <button className="btn_one" onClick={() => setModalOne(true)}>
            {" "}
            Кнопка 1
          </button>
          <button className="btn_two" onClick={() => setModalTwo(true)}>
            {" "}
            Кнопка 2
          </button>

          <Modal isOpened={modalOne}>
            <ModalOne setModalOne={setModalOne} />
          </Modal>
          <Modal isOpened={modalTwo}>
            <ModalTwo setModalTwo={setModalTwo} setView={setView} />
          </Modal>
        </div>
      ) : (
        <div className="box_btn">
          <button className="btn_one"> Кнопка 3</button>
          <button className="btn_two"> Кнопка 4</button>
          <Link to="/dropdawn">
            <button className="btn_two">DropDawn</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default MainPage;
