import React from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const SearchForm = () => (
  <form className="d-flex flex-grow-1">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
);

export const Logo = () => (
  <Link to="/">
    <span className="h2">SHOUT</span>
  </Link>
);

const Header = () => {
  return (
    <div className="sticky-top">
      <div className="header-content">
        <div className="container-sm">
          <div className="row">
            <div className="col">
              <div className="d-flex py-3">
                <div className="d-none d-md-block w-100">
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="d-flex flex-nowrap flex-grow-1 justify-content-start">
                      <Logo />
                      <span className="d-block me-3" />
                      <SearchForm />
                    </div>

                    <div className="d-flex justify-content-end flex-nowrap">
                      <span className="d-block me-3" />
                      <Link
                        to="/login"
                        type="button"
                        className="btn btn-primary"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="d-md-none w-100">
                  <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                    <Logo />
                  </div>
                  <span className="d-block mb-3" />
                  <div className="d-flex justify-content-between align-items-center flex-nowrap">
                    <MdMenu
                      size={38}
                      className="me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#menuModal"
                    />
                    <span className="d-block me-2" />
                    <div className="flex-grow-1 ">
                      <SearchForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
