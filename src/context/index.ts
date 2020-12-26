import { createContext, Dispatch, SetStateAction } from "react";
import State, { defaultState } from "../state";

interface contextValue {
  state: State;
  setState?: Dispatch<SetStateAction<State>>;
}

const value: contextValue = {
  state: defaultState,
};

const context = createContext(value);

export default context;
