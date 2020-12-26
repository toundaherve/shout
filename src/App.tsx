import logo from "./logo.svg";
import "./App.css";
import ShouterClass from "./state/Shouter";
import Shouter from "./components/Shouter";
import Shout from "./components/Shout";
import { useState } from "react";
import { defaultState } from "./state";
import context from "./context";
import Hear from "./components/Hear";
import { BrowserRouter, Route } from "react-router-dom";
import Voice from "./components/Voice";

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <div className="App">
      <context.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Route path="/" exact component={Hear} />
          <Route path="/voice/:Id" component={Voice} />
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
