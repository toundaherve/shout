import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

const Navigation = (props: RouteComponentProps) => {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <Link to="/shout">Shout</Link>
        </li>
        <li className="navigation-list-item">
          <Link to="/myvoices">My Voices</Link>
        </li>
        <li className="navigation-list-item">
          <Link to="/">All voices</Link>
        </li>
        <li className="navigation-list-item">
          <Link to="/shouter">My Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
