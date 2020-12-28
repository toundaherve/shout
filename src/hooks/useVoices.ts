import { useContext } from "react";
import context from "../context";
import Voice from "../state/Voice";

const useVoices = (): Array<Voice> => {
  const ctx = useContext(context);

  return ctx.state.voices;
};

export default useVoices;
