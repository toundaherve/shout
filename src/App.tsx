import "./App.css";
import { useState } from "react";
import { defaultState } from "./state";
import context from "./context";
import Hear from "./components/Hear";
import { BrowserRouter, Route } from "react-router-dom";
import Voice from "./components/Voice";
import MyVoices from "./components/MyVoices";
import Shout from "./components/Shout";
import Navigation from "./components/Navigation";
import Shouter from "./components/Shouter";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Auth from "./components/Auth";
import Header from "./components/Header";
import NavigationModal from "./components/NavigationModal";

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <div className="App">
      <context.Provider value={{ state, setState }}>
        <BrowserRouter>
          <div className="min-vh-100">
            <Route path="/" component={Header} />
            <span className="d-block py-1" />
            <div className="container-sm bg-secondary">
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
              <div className="d-flex justify-content-between flex-nowrap">
                <div className="flex-grow-1 bg-danger vh-100">
                  {/* TODO: (min-width) { max-width: calc(100% - 160px[Aside ads width]) } */}
                  <div className="position-relative"></div>
                </div>
                <div
                  className="d-none d-lg-block flex-grow-0 ms-3 bg-success"
                  style={{ flexBasis: "160px" }}
                >
                  <div
                    className="position-sticky"
                    style={{ top: "calc(92px)" }}
                  >
                    <div className="d-flex justify-content-start">
                      {/* Ads Aside goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Route path="/" component={Auth} />
          <Route path="/" component={Navigation} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact component={Hear} />
          <Route path="/voice/:Id" component={Voice} />
          <Route path="/myvoices" component={MyVoices} />
          <Route path="/shout" component={Shout} />
          <Route path="/shouter" component={Shouter} /> */}
          <Route path="/">
            <NavigationModal />
          </Route>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
