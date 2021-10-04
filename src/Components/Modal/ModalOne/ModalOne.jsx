import React from "react";

export const ModalOne = (props) => {

   const {handleClickButtonOneAlert, handleClickButtonCloseModalOne} = props;
   return (
      <>
      <button className="modal_open" onClick={handleClickButtonOneAlert}>
         Ok (Alert)
      </button>
      <button className="modal_close" onClick={handleClickButtonCloseModalOne}>
         Close
      </button>
      </>
   );
}
