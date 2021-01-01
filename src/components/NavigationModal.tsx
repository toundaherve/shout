import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Header";

interface ModalProps {}

const NavigationModal = (props: ModalProps) => (
  <div className="modal" id="menuModal">
    <div className="modal-dialog modal-fullscreen-md-down">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title w-100">
            <div className="d-flex justify-content-between flex-nowrap align-items-baseline">
              <Logo />
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
          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-between flex-nowrap py-2 px-3 mb-3">
              <Link
                to="/signup"
                type="button"
                className="btn btn-primary flex-grow-1"
              >
                Sign up
              </Link>
              <span className="d-block mx-2"></span>
              <Link
                to="/login"
                type="button"
                className="btn btn-primary flex-grow-1"
              >
                Log in
              </Link>
            </div>

            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/shout"
                >
                  Shout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myvoices">
                  My voices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shouter">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavigationModal;
