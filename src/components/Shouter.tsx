import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import context from "../context";
import useAuth from "../hooks/useAuth";

const Shouter = (props: RouteComponentProps) => {
  useAuth();

  const me = useContext(context).state.me;
  return (
    <div className="shouter">
      <ul className="shouter-details">
        <li className="shouter-detail">Name: {me.name} </li>
        <li className="shouter-detail">Location: {me.location}</li>
        <li className="shouter-detail">Email: {me.email} </li>
        <li className="shouter-detail">Phone: {me.phone} </li>
      </ul>
    </div>
  );
};

export default Shouter;
