import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Header";

interface ModalProps {
  id: string;
  header?: FunctionComponent;
  body: FunctionComponent;
}

const Modal = (props: ModalProps) => {
  const id = props.id;
  const Header = props.header;
  const Body = props.body;

  return (
    <div className="modal" id={id}>
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title w-100">
              <div className="d-flex justify-content-between flex-nowrap align-items-baseline">
                {Header && <Header />}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>

          <div className="modal-body">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
