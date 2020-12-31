import React, { ChangeEvent, FormEvent, useState } from "react";

interface ProfileData {
  email: string;
  password: string;
  name: string;
  location: string;
  phone: string;
}

const defaultProfile: ProfileData = {
  email: "",
  password: "",
  name: "",
  location: "",
  phone: "",
};

const SignUp = (props: ProfileData) => {
  const [profile, setProfile] = useState(defaultProfile);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Sign up success");
  }

  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-8">
        <h1 className="text-light mb-4">Sign up</h1>
        <form
          action=""
          className="form py-4 px-3 bg-secondary"
          onSubmit={handleSubmit}
        >
          <legend>Fill in your details</legend>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={profile.email}
              disabled
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInputName"
              placeholder="Type your name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInputLocation"
              className="form-label"
            >
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInputLocation"
              placeholder="W3L AL5 - Wolverhampton Leeds"
              value={profile.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInputTel" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleFormControlInputTel"
              placeholder="0000-0000-0000"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
