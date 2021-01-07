import React, {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface LoginProps {
  email: string;
  password: string;
  handleSubmit: () => void;
  handleInputChange: () => void;
}

const Login = (props: LoginProps) => {
  const {
    email = "",
    password = "",
    handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      console.log("Handling submit");
    },
    handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
      console.log("Handling change"),
  } = props;

  return (
    <>
      <Header>
        <p className="text-center">
          Don't have an Account?
          <button type="button" className="btn btn-link">
            Sign up
          </button>
        </p>
      </Header>

      <Title>Log in</Title>
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

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleInputChange}
        />

        <div className="mb-3">
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleInputChange}
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

        <SubmitButton>Submit</SubmitButton>
      </form>
    </>
  );
};

export function Header(props: PropsWithChildren<any>) {
  return (
    <>
      {props.children}

      <span className="d-block my-3 border-bottom border-secondary"></span>
    </>
  );
}

export function Title(props: PropsWithChildren<any>) {
  return <h1 className="text-center mb-3">{props.children}</h1>;
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mb-3">
      <input className="form-control" {...props} />
    </div>
  );
}

export function SubmitButton(props: PropsWithChildren<any>) {
  return (
    <button type="submit" className="btn btn-success w-100">
      {props.children}
    </button>
  );
}
export default Login;
