import { useContext } from "react";
import context from "../context";

const useLogout = () => {
  const ctx = useContext(context);
  return () => {
    if (ctx.setState) {
      ctx.setState({ ...ctx.state, isLoggedIn: false });
    }
  };
};

export default useLogout;
