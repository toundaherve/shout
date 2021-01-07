import React, { FunctionComponent, useEffect, useRef } from "react";
import { HashRouter, Route } from "react-router-dom";
import SignupContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";
import { Logo } from "./Header";
import Navigation from "./Navigation";

const Modal: FunctionComponent<any> = (props) => {
  let myModal = useRef<Bootstrap.Modal>();

  useEffect(() => {
    myModal.current = new (((window as any).bootstrap as any).Modal as any)(
      document.getElementById("myModal")
    );
  }, [myModal]);

  function closeModal() {
    myModal.current?.toggle();
  }

  return (
    <HashRouter basename="/">
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title w-100">
                <div className="d-flex justify-content-between flex-nowrap align-items-baseline">
                  <Route path="/navigation">
                    <Logo />
                  </Route>
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
              <Route path="/navigation">
                <Navigation onNavigation={closeModal} />
              </Route>

              <Route path="/signup">
                <SignupContainer />
              </Route>

              <Route path="/login">
                <LoginContainer />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default Modal;
