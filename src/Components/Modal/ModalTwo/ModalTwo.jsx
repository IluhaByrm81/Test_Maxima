import React from "react";

export const ModalTwo = (props) => {

   const {handleClickButtonOneAlert, handelClickChangeView,handleClickButtonCloseModalTwo} = props;
  return (
    <>
      <button className="modal_open" onClick={handleClickButtonOneAlert}>
        Кнопка 1 (Alert)
      </button>
      <button className="modal_close" onClick={handelClickChangeView}>
        Кнопка 2 (ChangeView)
      </button>
      <button className="modal_close" onClick={handleClickButtonCloseModalTwo}>
        Close
      </button>
    </>
  );
};
