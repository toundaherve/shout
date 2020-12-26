import React, { useContext } from "react";
import context from "../context";
import VoiceList from "./VoiceList";

const MyVoices = () => {
  const myVoices = useContext(context).state.myVoices;
  return (
    <div className="my-voices">
      <h1 className="my-voices-title">My Voices</h1>
      <VoiceList voiceListData={myVoices} />
    </div>
  );
};

export default MyVoices;
