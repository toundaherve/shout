import React from "react";
import useAuthRequired from "../hooks/useAuthRequired";
import useMyvoices from "../hooks/useMyVoices";
import VoiceList from "./VoiceList";

const MyVoices = () => {
  useAuthRequired();

  const myVoices = useMyvoices();
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <h1 className="text-light mt-5 mb-4">My Voices</h1>
        <VoiceList voiceListData={myVoices} />
      </div>
    </div>
  );
};

export default MyVoices;
