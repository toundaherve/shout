import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import useLogout from "../hooks/useLogout";

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();
  const logout = useLogout();
  return (
    <ul className="navbar-nav align-items-center">
      {isLoggedIn && (
        <>
          <li className="nav-item active">
            <Link to="/shout" className="nav-link" aria-current="page">
              Shout
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/myvoices" className="nav-link" aria-current="page">
              My Voices
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shouter" className="nav-link" aria-current="page">
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link" aria-current="page">
              Settings
            </Link>
          </li>
        </>
      )}

      {!isLoggedIn && (
        <>
          <li className="nav-item">
            <Link to="/login" className="nav-link" aria-current="page">
              <button type="button" className="btn btn-outline-primary">
                Login
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link" aria-current="page">
              <button type="button" className="btn btn-outline-primary">
                Signup
              </button>
            </Link>
          </li>
        </>
      )}

      {isLoggedIn && (
        <li className="nav-item">
          <Link to="/login" className="nav-link" aria-current="page">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={logout}
            >
              Logout
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
