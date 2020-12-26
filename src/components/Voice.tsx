import React from "react";
import VoiceData from "../state/Voice";
import Shouter from "./Shouter";

interface VoiceProps {
  voiceData: VoiceData;
}

const Voice = (props: VoiceProps) => {
  return (
    <div className="voice">
      <div className="voice-shouter">
        <Shouter shouterData={props.voiceData.shouter} />
      </div>
      <div className="voice-message">{props.voiceData.message}</div>
      <div className="voice-status">
        Status: {`${props.voiceData.haveBeenHeard ? "Heard" : "Not Heard"}`}
      </div>
    </div>
  );
};

export default Voice;
