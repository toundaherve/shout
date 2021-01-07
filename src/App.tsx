import "./App.css";
import { useState } from "react";
import { defaultState } from "./state";
import context from "./context";
import { BrowserRouter, Route } from "react-router-dom";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <div className="App bg-light">
      <context.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Route path="/" component={HomePage} />
        </BrowserRouter>
      </context.Provider>

      <Modal />
    </div>
  );
}

export default App;
