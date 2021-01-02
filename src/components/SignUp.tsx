import React from "react";
import AuthTemplate from "./Auth";

const Login = () => {
  return (
    <AuthTemplate
      top={AlreadyMember}
      body={ContinueWithEmail}
      heading="Sign up"
    />
  );
};

function AlreadyMember() {
  return (
    <p className="text-center">
      Already a member?
      <button type="button" className="btn btn-link">
        Log in
      </button>
    </p>
  );
}

function ContinueWithEmail() {
  return (
    <a href="#1" className="btn btn-outline-secondary w-100">
      Continue with Email
    </a>
  );
}

export default Login;
