import logo from "./logo.svg";
import "./App.css";
import ShouterClass from "./state/Shouter";
import Shouter from "./components/Shouter";
import Shout from "./components/Shout";
import { useState } from "react";
import { defaultState } from "./state";
import context from "./context";
import Hear from "./components/Hear";

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <div className="App">
      <context.Provider value={{ state, setState }}>
        <Hear />
      </context.Provider>
    </div>
  );
}

export default App;
