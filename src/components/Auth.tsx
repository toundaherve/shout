import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import useLogout from "../hooks/useLogout";
import "./Auth.css";

const Auth = () => {
  const isLoggedIn = useIsLoggedIn();
  const logout = useLogout();
  return (
    <div className="auth">
      <ul className="auth-list">
        {!isLoggedIn && (
          <>
            <li className="auth-list-item">
              <Link to="/login">
                <button type="button" className="button">
                  Login
                </button>
              </Link>
            </li>
            <li className="auth-list-item">
              <Link to="/signup">
                <button type="button" className="button">
                  Sign up
                </button>
              </Link>
            </li>
          </>
        )}

        {isLoggedIn && (
          <li className="auth-list-item">
            <button type="button" className="button" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Auth;
