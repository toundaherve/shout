import Voice from "./Voice";

export default class Shouter {
  Id: string;
  name: string;
  location: string;
  email: string;
  phone: string;

  constructor(
    Id: string,
    name: string,
    location: string,
    email: string,
    phone: string
  ) {
    this.Id = Id;
    this.name = name;
    this.location = location;
    this.email = email;
    this.phone = phone;
  }

  shout(message: string): Voice {
    return new Voice(Math.round(Math.random() * 999).toString(), this, message);
  }
}
