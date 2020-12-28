import { useContext } from "react";
import context from "../context";
import Voice from "../state/Voice";

const useVoice = (voiceId: string): Voice | undefined => {
  const ctx = useContext(context);

  const voiceData = ctx.state.voices.find((voice) => voice.Id === voiceId);

  return voiceData;
};

export default useVoice;
