import "./App.css";
import { useState } from "react";
import { defaultState } from "./state";
import context from "./context";
import Hear from "./components/Hear";
import { BrowserRouter, Route } from "react-router-dom";
import Voice from "./components/Voice";
import MyVoices from "./components/MyVoices";
import Shout from "./components/Shout";
import Shouter from "./components/Shouter";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <context.Provider value={{ state, setState }}>
      <BrowserRouter>
        <div className="App container">
          <div className="row gy-4">
            {/*---------------------------------------------------------------  Header */}
            <div className="col-12 bg-dark">
              <Route path="/" component={Modal} />
              <Route path="/" component={Header} />
            </div>
            {/*------------------------------------------------------------------------*/}

            {/*--------------------------------------------------------------- Content */}
            <div className="col-12 bg-dark">
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" exact component={Hear} />
              <Route path="/voice/:Id" component={Voice} />
              <Route path="/myvoices" component={MyVoices} />
              <Route path="/shout" component={Shout} />
              <Route path="/shouter" component={Shouter} />
            </div>
            {/*------------------------------------------------------------------------ */}

            {/*----------------------------------------------------------------- Footer */}
            <div className="col-12 bg-dark p-4">footer</div>
            {/*-------------------------------------------------------------------------*/}
          </div>
        </div>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
