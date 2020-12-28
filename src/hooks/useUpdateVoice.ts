import { useContext } from "react";
import context from "../context";
import Voice from "../state/Voice";
import useVoices from "./useVoices";

const useUpdateVoice = () => {
  const voices = useVoices();
  const ctx = useContext(context);

  return (updatedVoice: Voice) => {
    const filteredVoices = voices.filter(
      (voice) => voice.Id !== updatedVoice.Id
    );

    filteredVoices.push(updatedVoice);

    if (ctx.setState) ctx.setState({ ...ctx.state, voices: filteredVoices });
  };
};

export default useUpdateVoice;
