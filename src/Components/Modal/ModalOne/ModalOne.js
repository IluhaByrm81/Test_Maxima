import React from "react";

function ModalOne({setModalOne}) {
  return (
    <>
      <button className="modal_open" onClick={() => setModalOne(alert("Ok"))}>
        Ok
      </button>
      <button className="modal_close" onClick={() => setModalOne(false)}>
        Отмена
      </button>
    </>
  );
}
export default ModalOne;
