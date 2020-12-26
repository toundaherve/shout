import Shouter from "./Shouter";

export default class Voice {
  Id: string;
  shouter: Shouter;
  message: string;
  haveBeenHeard: boolean = false;

  constructor(Id: string, shouter: Shouter, message: string) {
    this.Id = Id;
    this.shouter = shouter;
    this.message = message;
  }

  contactShouterViaEmail(
    name: string,
    email: string,
    message: string
  ): boolean {
    console.log(`${name} contacted shouter ${this.shouter.name} via Email ...`);
    return true;
  }

  markAsHeard(): boolean {
    this.haveBeenHeard = true;
    return true;
  }
}

export function hearParticularVoice(
  voices: Array<Voice>,
  message: string
): Array<Voice> {
  return voices.filter((voice) => voice.message.includes(message));
}

export function myVoices(shouter: Shouter, voices: Array<Voice>): Array<Voice> {
  return voices.filter((voice) => voice.shouter.Id === shouter.Id);
}
