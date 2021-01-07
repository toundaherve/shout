import React, { useState } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Header, Input, SubmitButton, Title } from "./Login";

const Signup = () => {
  const [strategy, setStrategy] = useState("");

  return strategy === "email" ? (
    <WithEmail />
  ) : (
    <WithOAuth handleEmailStrategySelection={() => setStrategy("email")} />
  );
};

interface WithOAuthProps {
  handleEmailStrategySelection?: () => void;
}

function WithOAuth(props: WithOAuthProps) {
  const {
    handleEmailStrategySelection = () => {
      console.log("Handle Email strategy");
    },
  } = props;
  return (
    <>
      <Header>
        <p className="text-center">
          Already have an Account?
          <button type="button" className="btn btn-link">
            Log in
          </button>
        </p>
      </Header>

      <Title>Sign up</Title>

      <a
        href="#1"
        className="btn btn-outline-secondary bg-white text-dark w-100 d-flex align-tems-center justify-content-center"
      >
        <FcGoogle size={24} />
        <span className="ms-2">Continue with Google</span>
      </a>
      <span className="d-block mb-2"></span>
      <a
        href="#1"
        className="btn btn-outline-light bg-dark text-white w-100 d-flex align-tems-center justify-content-center"
      >
        <FaApple size={24} />
        <span className="ms-2">Continue with Apple</span>
      </a>
      <span className="d-block mb-2"></span>
      <a
        href="#1"
        className="btn btn-outline-light w-100 d-flex bg-primary text-white align-tems-center justify-content-center"
      >
        <FaFacebook size={24} />
        <span className="ms-2">Continue with Facebook</span>
      </a>

      <span className="d-block mb-2"></span>

      <span className="d-block my-3 border-bottom border-secondary"></span>

      <span className="d-flex mb-2"></span>

      <a
        href="#1"
        className="btn btn-outline-secondary w-100"
        onClick={handleEmailStrategySelection}
      >
        Continue with Email
      </a>
    </>
  );
}

function WithEmail() {
  return (
    <>
      <Header>
        <p className="text-center">
          Sign up with
          <button type="button" className="btn btn-link">
            Facebook
          </button>
          or
          <button type="button" className="btn btn-link">
            Google
          </button>
        </p>
      </Header>

      <span className="mb-3 d-block"></span>

      <form>
        <Input placeholder="First name" type="text" />
        <Input placeholder="Last name" type="text" />
        <Input placeholder="Location" type="text" />
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Create a password" type="password" />
        <SubmitButton>Sign up</SubmitButton>
      </form>
    </>
  );
}

export default Signup;
