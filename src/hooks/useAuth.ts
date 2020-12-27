import { useContext } from "react";
import { useHistory } from "react-router-dom";
import context from "../context";

const useAuth = () => {
  const ctx = useContext(context);
  const history = useHistory();

  if (!ctx.state.isLoggedIn) {
    history.push("/login");
  }
};

export default useAuth;
