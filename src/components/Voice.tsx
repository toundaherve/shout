import React, { FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import useUpdateVoice from "../hooks/useUpdateVoice";
import useVoice from "../hooks/useVoice";

const Voice = (props: RouteComponentProps<{ Id: string }>) => {
  const voiceData = useVoice(props.match.params.Id);
  const isLoggedIn = useIsLoggedIn();
  const updateVoice = useUpdateVoice();

  if (!voiceData) {
    return (
      <div className="voice">
        <p className="voice-sorry">:-( Sorry this voice does not exist</p>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    voiceData?.contactShouterViaEmail(
      "Sandra",
      "sandra@gmail.com",
      "I got what you need"
    );
  }

  function handleMarkAsHeard() {
    if (voiceData) {
      voiceData?.markAsHeard();
      updateVoice(voiceData);
    }
  }

  return (
    <div className="row py-5 justify-content-center gy-2">
      <div className="col-12 col-md-8  bg-secondary py-3">
        <h1 className="mb-2">{voiceData.message}</h1>

        <ul className="list-unstyled">
          <li className="mb-1">
            <strong>Status: </strong>
            {`${voiceData.haveBeenHeard ? "Heard" : "Not Heard"}`}
          </li>
          <li className="mb-1">
            <strong>Name: </strong>
            {voiceData.shouter.name}
          </li>
          <li className="mb-1">
            <strong>Location: </strong>
            {voiceData.shouter.location}
          </li>
          <li className="mb-1">
            <strong>Email:</strong> {voiceData.shouter.email}
          </li>
          <li className="mb-1">
            <strong>Phone:</strong> {voiceData.shouter.phone}
          </li>
        </ul>
      </div>

      <div className="col-12 col-md-8 bg-secondary">
        {!isLoggedIn && (
          <div className="voice-contact">
            <form
              action=""
              className="form py-4  bg-secondary"
              onSubmit={handleSubmit}
            >
              <legend>Contact this person</legend>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Your Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInputName"
                  className="form-label"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInputName"
                  placeholder="Type your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label text-light"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        )}

        {isLoggedIn && (
          <div className="d-grid d-flex d-md-flex gap-2">
            <button
              className="btn btn-success flex-grow-1"
              type="button"
              onClick={handleMarkAsHeard}
            >
              Mark as hear
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              type="button"
              onClick={handleMarkAsHeard}
            >
              Unmark as hear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voice;
