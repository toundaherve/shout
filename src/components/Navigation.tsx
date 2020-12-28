import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <ul className="row">
      <li className="col">
        <Link to="/">
          <div className="text-center">Home</div>
        </Link>
      </li>

      {isLoggedIn && (
        <>
          <li className="col">
            <Link to="/shout">
              <div className="text-center">Shout</div>
            </Link>
          </li>
          <li className="col">
            <Link to="/myvoices">
              <div className="text-center">My Voices</div>
            </Link>
          </li>

          <li className="col">
            <Link to="/shouter">
              <div className="text-center">My Profile</div>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigation;
