import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import context from "../context";
import useAuthRequired from "../hooks/useAuthRequired";

const Shouter = (props: RouteComponentProps) => {
  useAuthRequired();

  const me = useContext(context).state.me;

  function handleSubmit() {}

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <h1 className="text-light mt-5 mb-4">You profile</h1>
        <form
          action=""
          className="form py-4 px-3 bg-secondary"
          onSubmit={handleSubmit}
        >
          <legend>Edit</legend>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={me.email}
              disabled
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
              value={me.name}
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
              value={me.location}
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
              value={me.phone}
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

export default Shouter;
