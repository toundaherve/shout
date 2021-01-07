import React, { ChangeEvent, FormEvent, useState } from "react";
import { WithEmail, WithOAuth } from "../components/SignUp";

const SignupContainer = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    password: "",
  });

  const [strategy, setStrategy] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setError(
        "The account details you entered are incorrect. Please try again."
      );
      setLoading(false);
    }, 3000);

    console.log("Submitting sign up info");
  }

  return strategy === "email" ? (
    <WithEmail
      {...userInfo}
      loading={loading}
      error={error}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  ) : (
    <WithOAuth handleEmailStrategySelection={() => setStrategy("email")} />
  );
};

export default SignupContainer;
