import React from "react";
import { Link } from "react-router-dom";
import { Logo, SmallLogo } from "./Header";

interface FooterProps {
  showFooterAds?: boolean;
}

const Footer = (props: FooterProps) => {
  const { showFooterAds = false } = props;
  return (
    <footer className="position-relative">
      <div className="d-none d-md-block">
        {showFooterAds && (
          <div className="d-flex flex-wrap bg-dark" style={{ height: "294px" }}>
            {/* Footer ADS */}
          </div>
        )}
      </div>
      <div className="bg-white">
        <span className="d-block border-bottom border-secondary"></span>
        <div className="container py-4">
          <div className="row flex-wrap">
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
              <div className="d-flex flex-column align-items-center">
                <div className="mb-2">
                  <SmallLogo />
                </div>
                <Link to="/" className="link-secondary">
                  <small>About</small>
                </Link>
                <Link to="/" className="link-secondary">
                  <small>Contact</small>
                </Link>
                <Link to="/" className="link-secondary">
                  <small>Terms & Conditions</small>
                </Link>
                <Link to="/" className="link-secondary">
                  <small>Privacy Policy</small>
                </Link>
                <Link to="/" className="link-secondary">
                  <small>Cookie Policy</small>
                </Link>
              </div>
            </div>
            <div className="d-none d-md-flex col-12 col-md-6 align-items-center justify-content-end">
              <div className="">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
