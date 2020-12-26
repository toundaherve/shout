import React from "react";
import VoiceData from "../state/Voice";
import VoiceList from "./VoiceList";

const MyVoices = () => {
  const myVoices: Array<VoiceData> = [];
  return (
    <div className="my-voices">
      <VoiceList voiceListData={myVoices} />
    </div>
  );
};

export default MyVoices;
