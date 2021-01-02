import React, { FunctionComponent, useEffect, useRef } from "react";

interface ModalProps {
  id: string;
  header?: FunctionComponent;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
  const id = props.id;
  const Header = props.header;

  let modalInstance = useRef<Bootstrap.Modal>();

  useEffect(() => {
    modalInstance.current = new (((window as any).bootstrap as any)
      .Modal as any)(document.getElementById(id));
  }, [modalInstance, id]);

  function closeModal() {
    modalInstance.current?.toggle();
  }

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
            {(props.children as any)(closeModal)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
