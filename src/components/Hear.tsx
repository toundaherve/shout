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
    <div className="row py-5 gy-4 gy-md-5 ">
      <div className="col-12">
        <h1 className="text-center text-light mb-3 mb-md-4">
          Find what people want
        </h1>
        <form className="d-flex" onSubmit={handleHearVoice}>
          <input
            onChange={handleChangeVoiceMessage}
            value={voiceMessage}
            className="w-100 me-2 me-md-3 d-block form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Hear now !
          </button>
        </form>
      </div>

      <div classNamejustify-content-center="col-12">
        <h2 className="text-left text-light mb-3">Results</h2>
        <VoiceList voiceListData={heardVoices} />
      </div>
    </div>
  );
};

export default Hear;
