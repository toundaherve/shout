import React, { FunctionComponent } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface AuthTemplateProps {
  top: FunctionComponent;
  heading: string;
  body: FunctionComponent;
}

const AuthTemplate = (props: AuthTemplateProps) => {
  const Top = props.top;
  const heading = props.heading;
  const Body = props.body;
  return (
    <>
      <Top />
      <span className="d-block my-3 border-bottom border-secondary"></span>
      <h1 className="text-center mb-3">{heading}</h1>
      <a
        href="#1"
        className="btn btn-outline-secondary bg-white text-dark w-100 d-flex align-tems-center justify-content-center"
      >
        <FcGoogle size={24} />
        <span className="ms-2">Continue with Google</span>
      </a>
      <span className="d-block mb-2"></span>
      <a
        href="#1"
        className="btn btn-outline-light bg-dark text-white w-100 d-flex align-tems-center justify-content-center"
      >
        <FaApple size={24} />
        <span className="ms-2">Continue with Apple</span>
      </a>
      <span className="d-block mb-2"></span>
      <a
        href="#1"
        className="btn btn-outline-light w-100 d-flex bg-primary text-white align-tems-center justify-content-center"
      >
        <FaFacebook size={24} />
        <span className="ms-2">Continue with Facebook</span>
      </a>
      <span className="d-block mb-2"></span>
      <span className="d-block my-3 border-bottom border-secondary"></span>
      <Body />
    </>
  );
};

export default AuthTemplate;
