import React from "react";
import "../Modal.scss";

export const Modal = ({ isOpened, children }) => {
   
    
  return (
    <div className={`modal_wraper ${isOpened ? "open" : "close"}`}>
      <div className="modal_box">{children}</div>
    </div>
  );
}
