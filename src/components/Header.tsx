import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [showShadow, setShowShadow] = useState(false);
  const shadow = showShadow ? "shadow" : "";
  useEffect(() => {
    // TODO: Unecessary rerenders called by this listener
    document.addEventListener("scroll", () => {
      console.warn(
        "Fix the unecessary rerenders of the Header triggered by window scrollEvent listener"
      );
      const y = window.scrollY;
      if (y > 2) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    });
  }, [showShadow]);
  return (
    <div className={`sticky-top ${shadow} header`}>
      <div className="header-content bg-white">
        <div className="container-sm">
          <div className="row">
            <div className="col">
              <div className="d-flex" style={{ padding: "12px 0" }}>
                <div className="d-none d-md-block w-100">
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="d-flex flex-nowrap flex-grow-1 justify-content-start">
                      <Logo />
                      <span className="d-block me-3" />
                      <SearchForm />
                    </div>

                    <div className="d-flex justify-content-end flex-nowrap">
                      <span className="d-block me-3" />
                      <a href="#/signup">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        >
                          Sign up
                        </button>
                      </a>
                      <span className="d-none d-lg-block  me-3" />
                      <a href="#/login">
                        <button
                          type="button"
                          className="d-none d-lg-block btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        >
                          Login
                        </button>
                      </a>
                      <span className="d-block me-3" />
                      <a href="#/navigation" className="text-dark">
                        <MenuToggler />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-md-none w-100">
                  <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                    <Logo />
                  </div>
                  <span className="d-block" style={{ marginBottom: "12px" }} />
                  <div className="d-flex justify-content-between align-items-center flex-nowrap">
                    <a href="#/navigation" className="text-dark">
                      <MenuToggler />
                    </a>
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

function SearchForm() {
  return (
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
}

export function Logo() {
  return (
    <Link to="/">
      <span className="h2">Bid Bang</span>
    </Link>
  );
}

export function SmallLogo() {
  return (
    <Link to="/">
      <span className="h6">Bid Bang</span>
    </Link>
  );
}

function MenuToggler() {
  return (
    <MdMenu
      size={38}
      className="me-2"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
    />
  );
}

export default Header;
