import React, { useReducer } from "react";
import { types } from "./types";

export const CTX = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return { ...state, sidebar: action.payload };
    case types.SET_WEATHER:
      return { ...state, location: action.payload };
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default props => {
  const state = useReducer(reducer, {
    sidebar: true,
    location: null,
    loading: true,
  });

  return <CTX.Provider value={state}>{props.children}</CTX.Provider>;
};
