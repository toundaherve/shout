import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <Link to="/">Home</Link>
        </li>

        {isLoggedIn && (
          <>
            <li className="navigation-list-item">
              <Link to="/shout">Shout</Link>
            </li>
            <li className="navigation-list-item">
              <Link to="/myvoices">My Voices</Link>
            </li>

            <li className="navigation-list-item">
              <Link to="/shouter">My Profile</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
