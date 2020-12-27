import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Navigation = () => {
  const logout = useLogout();
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
        <li className="navigation-list-item">
          <button className="button" type="button" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
