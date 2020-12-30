import React from "react";
import { Link } from "react-router-dom";
import VoiceData from "../state/Voice";

interface VoiceListProps {
  voiceListData: Array<VoiceData>;
}

const VoiceList = (props: VoiceListProps) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-2 ">
      {props.voiceListData.map((voice, idx) => (
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{voice.shouter.name}</h5>
              <p className="card-text">{voice.message}</p>
              <Link to={`/voice/${voice.Id}`} className="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoiceList;
