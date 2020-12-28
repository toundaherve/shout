import React, { FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import useUpdateVoice from "../hooks/useUpdateVoice";
import useVoice from "../hooks/useVoice";

const Voice = (props: RouteComponentProps<{ Id: string }>) => {
  const voiceData = useVoice(props.match.params.Id);
  const isLoggedIn = useIsLoggedIn();
  const updateVoice = useUpdateVoice();

  if (!voiceData) {
    return (
      <div className="voice">
        <p className="voice-sorry">:-( Sorry this voice does not exist</p>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    voiceData?.contactShouterViaEmail(
      "Sandra",
      "sandra@gmail.com",
      "I got what you need"
    );
  }

  function handleMarkAsHeard() {
    if (voiceData) {
      voiceData?.markAsHeard();
      updateVoice(voiceData);
    }
  }

  return (
    <div className="voice">
      <div className="voice-message">{voiceData.message}</div>
      <div className="voice-status">
        Status: {`${voiceData.haveBeenHeard ? "Heard" : "Not Heard"}`}
      </div>

      <ul className="voice-shouter">
        <li className="voice-shouter-detail">Name: {voiceData.shouter.name}</li>
        <li className="voice-shouter-detail">
          Location: {voiceData.shouter.location}
        </li>
        <li className="voice-shouter-detail">
          Email: {voiceData.shouter.email}
        </li>
        <li className="voice-shouter-detail">
          Phone: {voiceData.shouter.phone}
        </li>
      </ul>

      {!isLoggedIn && (
        <div className="voice-contact">
          <h2 className="voice-contact-title">Contact this person</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">Your Name:</label>
              <input className="form-input" type="text" />
            </div>
            <div className="form-field">
              <label className="form-label">Your Email:</label>
              <input className="form-input" type="email" />
            </div>
            <div className="form-field">
              <label className="form-label">Message:</label>
              <textarea
                className="form-textarea"
                cols={20}
                rows={10}
              ></textarea>
            </div>
            <button className="button" type="submit">
              Send
            </button>
          </form>
        </div>
      )}

      {isLoggedIn && (
        <div className="voice-mark">
          <button className="button" type="button" onClick={handleMarkAsHeard}>
            Mark as hear
          </button>
        </div>
      )}
    </div>
  );
};

export default Voice;
