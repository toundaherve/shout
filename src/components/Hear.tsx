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
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">Find what people want</h1>
        <form
          className="d-flex justify-content-center"
          onSubmit={handleHearVoice}
        >
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
      </div>

      <div className="col-12">
        <h2 className="text-left">Results</h2>
        <VoiceList voiceListData={heardVoices} />
      </div>
    </div>
  );
};

export default Hear;
