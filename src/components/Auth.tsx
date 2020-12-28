import React from "react";
import { Link } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import useLogout from "../hooks/useLogout";

const Auth = () => {
  const isLoggedIn = useIsLoggedIn();
  const logout = useLogout();
  return (
    <div className="row">
      {!isLoggedIn && (
        <div className="col">
          <Link to="/login">
            <button type="button" className="button">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button type="button" className="button">
              Signup
            </button>
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <div className="col">
          <button type="button" className="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
