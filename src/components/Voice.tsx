import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import context from "../context";

const Voice = (props: RouteComponentProps<{ Id: string }>) => {
  const ctx = useContext(context);

  const voiceData = ctx.state.voices.find(
    (voice) => voice.Id === props.match.params.Id
  );

  if (!voiceData) {
    return (
      <div className="voice">
        <p className="voice-sorry">:-( Sorry this voice does not exist</p>
      </div>
    );
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
    </div>
  );
};

export default Voice;
