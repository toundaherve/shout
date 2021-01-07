import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

interface NavigationProps {
  onNavigation: () => void;
}

const Navigation = (props: NavigationProps) => {
  const { onNavigation } = props;
  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex justify-content-between flex-nowrap py-2 px-3 mb-3">
        <a
          href="#/signup"
          type="button"
          className="btn btn-primary flex-grow-1"
        >
          Sign up
        </a>
        <span className="d-block mx-2"></span>
        <a href="#/login" type="button" className="btn btn-primary flex-grow-1">
          Log in
        </a>
      </div>

      <BrowserRouter>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={onNavigation}>
            <Link className="nav-link active" aria-current="page" to="/makebid">
              Make bid
            </Link>
          </li>
          <li className="nav-item" onClick={onNavigation}>
            <Link className="nav-link" to="/mybids">
              My bids
            </Link>
          </li>
          <li className="nav-item" onClick={onNavigation}>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
