import React from "react";
import useAuthRequired from "../hooks/useAuthRequired";
import useMyvoices from "../hooks/useMyVoices";
import VoiceList from "./VoiceList";

const MyVoices = () => {
  useAuthRequired();

  const myVoices = useMyvoices();
  return (
    <div className="">
      <h1 className="text-center">My Voices</h1>
      <VoiceList voiceListData={myVoices} />
    </div>
  );
};

export default MyVoices;
