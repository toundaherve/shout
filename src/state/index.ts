import Shouter from "./Shouter";
import Voice from "./Voice";

export default interface State {
  me: Shouter;
  myVoices: Array<Voice>;
  voices: Array<Voice>;
}

const herve: Shouter = new Shouter(
  "1234",
  "herves",
  "LS16 5RQ, Leeds",
  "toundaherve@gmail.com",
  "078575853"
);

const jeanyves: Shouter = new Shouter(
  "4334",
  "jumbo",
  "LS16 5RQ, Leeds",
  "jeanyves@gmail.com",
  "078575853"
);

const andre: Shouter = new Shouter(
  "6723",
  "andre",
  "LS16 5RQ, Leeds",
  "andre@gmail.com",
  "078575853"
);

export const defaultState: State = {
  me: herve,
  myVoices: [new Voice("3824", herve, "macbook 10X, color black, 250GB, $500")],
  voices: [
    new Voice("3824", herve, "iphone 10X, color black, 250GB, $500"),
    new Voice("3524", jeanyves, "car BMW, color red, $15.000, year: 2011"),
    new Voice("3924", andre, "Nike air, color black, 2018, $500"),
  ],
};
