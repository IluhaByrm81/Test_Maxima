import React from "react";

function ModalTwo({ setModalTwo, setView }) {
    
  const handleClickModalTwoAlert = () => {
    setModalTwo(alert("Ok"));
  };

  const handleChangeView = () => {
    setView(false);
  };

  const handleClickModalTwoClose = () => {
    setModalTwo(false);
  };

  return (
    <>
      <button className="modal_open" onClick={handleClickModalTwoAlert}>
        Кнопка 1 (Alert)
      </button>
      <button className="modal_close" onClick={handleChangeView}>
        Кнопка 2 (ChangeView)
      </button>
      <button className="modal_close" onClick={handleClickModalTwoClose}>
        Close
      </button>
    </>
  );
}
export default ModalTwo;
