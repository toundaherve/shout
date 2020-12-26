import React, { ChangeEvent, useState } from "react";
import Shouter from "../state/Shouter";

const Shout = () => {
  const [message, setMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  function handleShout() {
    // const voice = shouter1.shout(message);
  }

  return (
    <div className="shout">
      <form className="shout-form">
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
