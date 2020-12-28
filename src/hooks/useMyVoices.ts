import { useContext } from "react";
import context from "../context";
import Voice from "../state/Voice";

const useMyvoices = (): Array<Voice> => {
  return useContext(context).state.myVoices;
};

export default useMyvoices;
