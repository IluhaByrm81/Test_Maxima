import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalOne from "../Modal/ModalOne/ModalOne";
import ModalTwo from "../Modal/ModalTwo/ModalTwo";
import ButtonOne from "../Buttons/ButtonOne";
import ButtonTwo from "../Buttons/ButtonTwo";
import "./MainPage.css";

function MainPage() {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [view, setView] = useState(true);

  return (
    <div className="wraper">
      {view ? (
        <>
          <ButtonOne setModalOne={setModalOne} setModalTwo={setModalTwo} />

          <Modal isOpened={modalOne}>
            <ModalOne setModalOne={setModalOne} />
          </Modal>
          <Modal isOpened={modalTwo}>
            <ModalTwo setModalTwo={setModalTwo} setView={setView} />
          </Modal>
        </>
      ) : (
        <ButtonTwo />
      )}
    </div>
  );
}
export default MainPage;
