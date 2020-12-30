import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <header className="row row-cols-auto align-items-end justify-content-between py-3">
      <div>
        <Link to="/">
          <span className="text-center h1">
            <em>Shout!!</em>
          </span>
        </Link>
      </div>
      <div>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
