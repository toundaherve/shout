import { useHistory } from "react-router-dom";
import useIsLoggedIn from "./useIsLoggedIn";

const useAuthRequired = () => {
  const isLoggedIn = useIsLoggedIn();
  const history = useHistory();

  if (!isLoggedIn) {
    history.push("/login");
  }
};

export default useAuthRequired;
