import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <nav className="row">
      <div className="col">
        <Link to="/">
          <div className="text-center">Home</div>
        </Link>
      </div>

      {isLoggedIn && (
        <>
          <div className="col">
            <Link to="/shout">
              <div className="text-center">Shout</div>
            </Link>
          </div>
          <div className="col">
            <Link to="/myvoices">
              <div className="text-center">My Voices</div>
            </Link>
          </div>

          <div className="col">
            <Link to="/shouter">
              <div className="text-center">My Profile</div>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
