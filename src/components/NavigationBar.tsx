import React from "react";
import Navigation from "./Navigation";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#mymodal"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-none d-md-block"
        id="navbarSupportedContent"
      >
        <Navigation />
      </div>
    </nav>
  );
};

export default NavigationBar;
