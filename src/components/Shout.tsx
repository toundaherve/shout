import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import context from "../context";
import useAuthRequired from "../hooks/useAuthRequired";
import "./Shout.css";

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
    <div>
      <h1 className="text-center">Say what you want</h1>
      <form className="shout-form" onSubmit={handleShout}>
        <label className="shout-message-label">Message: </label>
        <textarea
          className="shout-message"
          name="message"
          onChange={handleChange}
          rows={20}
          cols={20}
          value={message}
        />
        <button className="shout-submission">Shout</button>
      </form>
    </div>
  );
};

export default Shout;
