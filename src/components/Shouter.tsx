import React from "react";
import ShouterData from "../state/Shouter";

interface ShouterProps {
  shouterData: ShouterData;
}

const Shouter = (props: ShouterProps) => {
  return (
    <div className="shouter">
      <ul className="shouter-details">
        <li className="shouter-detail">Name: {props.shouterData.name} </li>
        <li className="shouter-detail">
          Location: {props.shouterData.location}
        </li>
        <li className="shouter-detail">Email: {props.shouterData.email} </li>
        <li className="shouter-detail">Phone: {props.shouterData.phone} </li>
      </ul>
    </div>
  );
};

export default Shouter;
