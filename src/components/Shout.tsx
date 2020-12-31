import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import context from "../context";
import useAuthRequired from "../hooks/useAuthRequired";

const Shout = (props: RouteComponentProps) => {
  useAuthRequired();

  const ctx = useContext(context);

  const [message, setMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  function handleShout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const voice = ctx.state.me.shout(message);

    if (!ctx.setState) {
      throw new Error("No setState in context");
    }

    ctx.setState({
      ...ctx.state,
      voices: [...ctx.state.voices, voice],
      myVoices: [...ctx.state.myVoices, voice],
    });

    props.history.push(`/voice/${voice.Id}`);
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <h1 className="text-light mt-5 mb-4">Need an item</h1>
        <form
          action=""
          className="form py-4 px-3 bg-secondary"
          onSubmit={handleShout}
        >
          <legend>Describe what you need</legend>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label text-light"
            >
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={5}
              onChange={handleChange}
              value={message}
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shout;
