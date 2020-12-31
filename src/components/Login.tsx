import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import context from "../context";

interface Credentials {
  email: string;
  password: string;
}

const defautlCredentials: Credentials = { email: "", password: "" };

const Login = (props: RouteComponentProps) => {
  const ctx = useContext(context);

  const [credentials, setCredentials] = useState(defautlCredentials);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (ctx.setState) ctx.setState({ ...ctx.state, isLoggedIn: true });

    props.history.push("/myvoices");
  }

  return (
    <div className="row  justify-content-center">
      <h1 className="col-12 text-center text-light pb-4 pt-5 ">Login</h1>

      <form className="col-12 col-md-6 py-4 bg-info" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-light">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-light"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={credentials.password}
            onChange={handleChange}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
