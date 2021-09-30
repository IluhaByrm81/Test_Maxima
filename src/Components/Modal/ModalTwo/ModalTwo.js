import React from "react";

function ModalTwo(props) {
  const { setModalTwo, setView } = props;
  return (
    <>
      <button className="modal_open" onClick={() => setModalTwo(alert("Ok"))}>
        Кнопка 1
      </button>
      <button className="modal_close" onClick={() => setModalTwo(alert("Ok"))}>
        Кнопка 2
      </button>
      <button className="modal_close" onClick={() => setView(false)}>
        Кнопка 3
      </button>
      <button className="modal_close" onClick={() => setModalTwo(false)}>
        Отмена
      </button>
    </>
  );
}
export default ModalTwo;
