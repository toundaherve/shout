import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import context from "../context";
import Shouter from "./Shouter";

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
      <div className="voice-shouter">
        <Shouter shouterData={voiceData.shouter} />
      </div>
      <div className="voice-message">{voiceData.message}</div>
      <div className="voice-status">
        Status: {`${voiceData.haveBeenHeard ? "Heard" : "Not Heard"}`}
      </div>
    </div>
  );
};

export default Voice;
