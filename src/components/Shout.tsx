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
    <div className="row rows-cols-auto justify-content-center">
      <h1 className="col-12 text-center">Say what you want</h1>
      <div className="col-8">
        <form className="" onSubmit={handleShout}>
          <label className="d-block">Message: </label>
          <textarea
            className="d-block w-100"
            name="message"
            onChange={handleChange}
            rows={10}
            value={message}
          />
          <button className="shout-submission">Shout</button>
        </form>
      </div>
    </div>
  );
};

export default Shout;
