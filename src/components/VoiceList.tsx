import React from "react";
import { Link } from "react-router-dom";
import VoiceData from "../state/Voice";

interface VoiceListProps {
  voiceListData: Array<VoiceData>;
}

const VoiceList = (props: VoiceListProps) => {
  return (
    <div className="row">
      {props.voiceListData.map((voice, idx) => (
        <div className="col-6 col-md-3" key={idx}>
          <Link to={`/voice/${voice.Id}`}>
            <div className="voice">
              <div className="voice-message">{voice.message}</div>
              <div className="voice-status">
                Status: {`${voice.haveBeenHeard ? "Heard" : "Not Heard"}`}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VoiceList;
