import { useContext } from "react";
import { useHistory } from "react-router-dom";
import context from "../context";

const useLogout = () => {
  const ctx = useContext(context);
  const history = useHistory();
  return () => {
    if (ctx.setState) {
      history.push("/");
      ctx.setState({ ...ctx.state, isLoggedIn: false });
      console.log("success logging out");
    }
  };
};

export default useLogout;
