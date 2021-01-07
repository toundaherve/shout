import React, { ChangeEvent, FormEvent, useState } from "react";
import Login from "../components/Login";

const LoadingContainer = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
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

    console.log("Submitting login  info");
  }

  return (
    <Login
      {...userInfo}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default LoadingContainer;
