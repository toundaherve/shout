import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

interface LayoutProps {
  showBannerAds?: boolean;
  showAsideAds?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  const { showBannerAds = true, showAsideAds = true, children } = props;
  return (
    <div className="min-vh-100">
      <Route path="/" component={Header} />
      <span className="d-block py-1" />
      <div className="container-sm bg-secondary">
        {showBannerAds && (
          <>
            <div className="d-block bg-dark">
              <div className="d-flex justify-content-center">
                {/* Ads Banner goes here*/}
                {/* TODO: Remove mock banner */}
                <div
                  className="d-none d-lg-block"
                  style={{ height: "90px" }}
                ></div>
                <div className="d-lg-none" style={{ height: "50px" }}></div>
              </div>
            </div>
            <span className="d-block mb-3" />
          </>
        )}

        <div className="d-flex justify-content-between flex-nowrap">
          <div className="flex-grow-1 bg-danger vh-100">
            {/* TODO: (min-width) { max-width: calc(100% - 160px[Aside ads width]) } */}
            <div className="position-relative">
              <div>{children}</div>
            </div>
          </div>

          {showAsideAds && (
            <div
              className="d-none d-lg-block flex-grow-0 ms-3 bg-success"
              style={{ flexBasis: "160px" }}
            >
              <div className="position-sticky" style={{ top: "calc(92px)" }}>
                <div className="d-flex justify-content-start">
                  {/* Ads Aside goes here */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
