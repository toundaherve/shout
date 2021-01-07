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
import Header, { Logo } from "./components/Header";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import { ItemDescription } from "./pages/HomePage";
import SignupContainer from "./containers/SignUpContainer";
import LoadingContainer from "./containers/LoginContainer";

function App() {
  const [state, setState] = useState(defaultState);
  return (
    <div className="App bg-light">
      <context.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Route path="/" component={HomePage} />
          {/* <Route path="/" component={Login} /> */}
          {/* <Route path="/" component={SignUp} /> */}
          {/* <Route path="/" component={Auth} />
          <Route path="/" component={Navigation} />
          <Route path="/" exact component={Hear} />
          <Route path="/voice/:Id" component={Voice} />
          <Route path="/myvoices" component={MyVoices} />
          <Route path="/shout" component={Shout} />
          <Route path="/shouter" component={Shouter} /> */}
          <Route path="/">
            <Modal
              id="navigationModal"
              header={Logo}
              children={(handleClick: () => void) => (
                <Navigation onClick={handleClick} />
              )}
            />
            <Modal id="loginModal" children={LoadingContainer} />
            <Modal id="signupModal" children={SignupContainer} />
            <Modal id="itemDescriptionModal" children={ItemDescription} />
          </Route>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
