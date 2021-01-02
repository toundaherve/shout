import React from "react";
import AuthTemplate from "./Auth";

const Login = () => {
  return <AuthTemplate top={DontHaveAnAccount} body={Form} heading="Log in" />;
};

function DontHaveAnAccount() {
  return (
    <p className="text-center">
      Don't have an Account?
      <button type="button" className="btn btn-link">
        Log in
      </button>
    </p>
  );
}

function Form() {
  return (
    <>
      <span className="d-flex mb-2"></span>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
