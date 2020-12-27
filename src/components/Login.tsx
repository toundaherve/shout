import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import context from "../context";

interface Credentials {
  username: string;
  password: string;
}

const defautlCredentials: Credentials = { username: "", password: "" };

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
    <div className="login">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label htmlFor="username" className="login-field-label">
            Username:{" "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-field">
          <label htmlFor="password" className="login-field-label">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button className="login-submission" type="submit">
          Login now
        </button>
      </form>
      <p className="login-signup-link">
        or <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
