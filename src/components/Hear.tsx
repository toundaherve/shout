import React, { useState, ChangeEvent, useContext, FormEvent } from "react";
import context from "../context";
import VoiceData, { hearParticularVoice } from "../state/Voice";
import Voice from "./Voice";
import VoiceList from "./VoiceList";

const Hear = () => {
  const ctx = useContext(context);

  const [voiceMessage, setVoiceMessage] = useState("");
  const [heardVoices, setHeardVoices] = useState(ctx.state.voices);

  function handleChangeVoiceMessage(e: ChangeEvent<HTMLInputElement>) {
    setVoiceMessage(e.target.value);
  }

  function handleHearVoice(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const resultVoices = hearParticularVoice(ctx.state.voices, voiceMessage);

    setHeardVoices(resultVoices);
  }

  return (
    <div className="hear">
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
