import React, { FormEvent } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
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
    <div className="row py-5 justify-content-center gy-4 text-light">
      <div className="col-12">
        <h1 className="text-light">VoiceID n{voiceData.Id}</h1>
      </div>

      <div className="col-12">
        <div className="row g-2 justify-content-between">
          <div className="col-12 col-md bg-secondary py-3">
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <h2 className="mb-2">Voice</h2>
                <p className="mb-3">{voiceData.message}</p>
              </div>
              {isLoggedIn && (
                <div>
                  <button type="button" className="btn btn-primary me-2">
                    Modify
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-md bg-secondary py-3">
            <h2 className="mb-2">Owner</h2>
            <p className="mb-1">Name: {voiceData.shouter.name}</p>
            <p className="mb-1">Email: {voiceData.shouter.email}</p>
            <p className="mb-1">Location: {voiceData.shouter.location}</p>
            <p className="mb-3">Phone: {voiceData.shouter.phone}</p>
            <div>
              <button type="button" className="btn btn-primary me-2">
                Send message
              </button>
              {isLoggedIn && (
                <Link to="/shouter" type="button" className="btn btn-primary">
                  Edit profile
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
