import React from "react";
import "./Modal.css";

function Modal(props) {
  const { isOpened, children } = props;
  
  return (
    <div className={`modal_wraper ${isOpened ? "open" : "close"}`}>
      <div className="modal_box">{children}</div>
    </div>
  );
}
export default Modal;
