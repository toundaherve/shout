import Shouter from "./Shouter";
import Voice from "./Voice";

export default interface State {
  me: Shouter;
  myVoices: Array<Voice>;
  voices: Array<Voice>;
}
