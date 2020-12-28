import React, { useState, ChangeEvent, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import useVoices from "../hooks/useVoices";
import { hearParticularVoice } from "../state/Voice";
import VoiceList from "./VoiceList";

const Hear = (props: RouteComponentProps) => {
  const voices = useVoices();

  const [voiceMessage, setVoiceMessage] = useState("");
  const [heardVoices, setHeardVoices] = useState(voices);

  function handleChangeVoiceMessage(e: ChangeEvent<HTMLInputElement>) {
    setVoiceMessage(e.target.value);
  }

  function handleHearVoice(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const resultVoices = hearParticularVoice(voices, voiceMessage);

    setHeardVoices(resultVoices);
  }

  return (
    <div className="hear">
      <h1 className="hear-title">Find what people want</h1>
      <form className="hear-form" onSubmit={handleHearVoice}>
        <input
          onChange={handleChangeVoiceMessage}
          value={voiceMessage}
          type="text"
          placeholder="Type voice"
          className="hear-input"
        />
        <button className="hear-submission" type="submit">
          Hear now !
        </button>
      </form>
      <VoiceList voiceListData={heardVoices} />
    </div>
  );
};

export default Hear;
