import React from "react";
import { Link } from "react-router-dom";
import VoiceData from "../state/Voice";
import Voice from "./Voice";

interface VoiceListProps {
  voiceListData: Array<VoiceData>;
}

const VoiceList = (props: VoiceListProps) => {
  return (
    <ul className="voices-list">
      {props.voiceListData.map((voice, idx) => (
        <li className="voice-item" key={idx}>
          <Link to={`/voice/${voice.Id}`}>
            <div className="voice">
              <div className="voice-message">{voice.message}</div>
              <div className="voice-status">
                Status: {`${voice.haveBeenHeard ? "Heard" : "Not Heard"}`}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default VoiceList;
