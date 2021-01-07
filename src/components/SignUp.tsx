import React, { ChangeEvent, FormEvent } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ErrorMessage, Header, Input, SubmitButton, Title } from "./Login";

interface WithOAuthProps {
  handleEmailStrategySelection?: () => void;
}

export function WithOAuth(props: WithOAuthProps) {
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
          <a href="#/login" type="button" className="btn btn-link">
            Log in
          </a>
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

      <button
        className="btn btn-outline-secondary w-100"
        onClick={handleEmailStrategySelection}
      >
        Continue with Email
      </button>
    </>
  );
}

interface WithEmailProps {
  firstName: string;
  lastName: string;
  location: string;
  email: string;
  password: string;
  loading: boolean;
  error: string;
  handleSubmit: (e: FormEvent) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function WithEmail(props: WithEmailProps) {
  const {
    firstName = "",
    lastName = "",
    location = "",
    email = "",
    password = "",
    loading = false,
    error = "",
    handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      console.log("Provide a submit handler");
    },
    handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
      console.log("Provide an Input change handler"),
  } = props;
  return (
    <>
      {error && <ErrorMessage error={error} />}

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

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="First name"
          type="text"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
        />
        <Input
          placeholder="Last name"
          type="text"
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
        />
        <Input
          placeholder="Location"
          type="text"
          value={location}
          name="location"
          onChange={handleInputChange}
        />
        <Input
          placeholder="Email address"
          type="email"
          value={email}
          name="email"
          onChange={handleInputChange}
        />
        <Input
          placeholder="Create a password"
          type="password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
        <SubmitButton loading={loading}>Sign up</SubmitButton>
      </form>
    </>
  );
}
