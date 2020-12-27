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

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <div className="App">
      <context.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Route path="/" component={Navigation} />
          <Route path="/" exact component={Hear} />
          <Route path="/voice/:Id" component={Voice} />
          <Route path="/myvoices" component={MyVoices} />
          <Route path="/shout" component={Shout} />
          <Route path="/shouter" component={Shouter} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
