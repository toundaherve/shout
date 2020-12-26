import React from "react";
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
          <Voice voiceData={voice} />
        </li>
      ))}
    </ul>
  );
};

export default VoiceList;
