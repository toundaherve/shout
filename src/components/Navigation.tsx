import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  onClick: () => void;
}

const Navigation = (props: NavigationProps) => {
  const { onClick } = props;
  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex justify-content-between flex-nowrap py-2 px-3 mb-3">
        <button
          type="button"
          className="btn btn-primary flex-grow-1"
          onClick={onClick}
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
        >
          Sign up
        </button>
        <span className="d-block mx-2"></span>
        <button
          type="button"
          className="btn btn-primary flex-grow-1"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          onClick={onClick}
        >
          Log in
        </button>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item" onClick={onClick}>
          <Link className="nav-link active" aria-current="page" to="/shout">
            Make bid
          </Link>
        </li>
        <li className="nav-item" onClick={onClick}>
          <Link className="nav-link" to="/myvoices">
            My bids
          </Link>
        </li>
        <li className="nav-item" onClick={onClick}>
          <Link className="nav-link" to="/shouter">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
