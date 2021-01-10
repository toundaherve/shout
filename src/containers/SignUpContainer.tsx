import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { WithEmail, WithOAuth } from "../components/SignUp";

interface APIResponse {
  Code: number;
  Type: string;
  Message: string;
}

const SignupContainer = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
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

  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    fetch("http://192.168.1.68:4000/user", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data: APIResponse) => {
        setLoading(false);

        if (data.Type === "error") {
          setError(data.Message);
        } else {
          history.push("/login-just-registered");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.warn(err);
        setError("We are unable to perfom this action now. Retry later !");
      });
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
