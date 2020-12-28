import React from "react";
import useAuthRequired from "../hooks/useAuthRequired";
import useMyvoices from "../hooks/useMyVoices";
import VoiceList from "./VoiceList";

const MyVoices = () => {
  useAuthRequired();

  const myVoices = useMyvoices();
  return (
    <div className="my-voices">
      <h1 className="my-voices-title">My Voices</h1>
      <VoiceList voiceListData={myVoices} />
    </div>
  );
};

export default MyVoices;
