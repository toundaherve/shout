import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Header = () => {
  return (
    <header className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <div className="row row-cols-auto justify-content-center justify-content-md-start ">
            <div>
              <Link to="/">
                <span className="text-center h1">
                  <em>Shout!!</em>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row row-cols-auto justify-content-center justify-content-md-end ">
            <div>
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
