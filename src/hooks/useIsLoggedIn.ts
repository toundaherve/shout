import { useContext } from "react";
import context from "../context";

const useIsLoggedIn = (): boolean => {
  const ctx = useContext(context);

  return ctx.state.isLoggedIn;
};

export default useIsLoggedIn;
