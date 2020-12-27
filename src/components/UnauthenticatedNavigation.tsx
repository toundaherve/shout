import React from "react";
import { Link } from "react-router-dom";
import "./UnauthenticatedNavigation.css";

const UnauthenticatedNavigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <Link to="/login">
            <button type="button" className="button">
              Login
            </button>
          </Link>
        </li>
        <li className="navigation-list-item">
          <Link to="/signup">
            <button type="button" className="button">
              Sign up
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UnauthenticatedNavigation;
