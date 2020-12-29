import React from "react";
import Navigation from "./Navigation";

const Modal = () => {
  return (
    <div className="modal" id="mymodal">
      <div className="modal-dialog modal-fullscreen-md-down">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
