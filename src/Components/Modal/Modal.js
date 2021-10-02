import React from "react";
import "./Modal.scss";

function Modal({ isOpened, children }) {
    
  return (
    <div className={`modal_wraper ${isOpened ? "open" : "close"}`}>
      <div className="modal_box">{children}</div>
    </div>
  );
}
export default Modal;
