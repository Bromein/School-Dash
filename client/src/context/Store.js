import React, { useReducer } from "react";

export const CTX = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
};

export default props => {
  const state = useReducer(reducer, { sidebar: true });

  return <CTX.Provider value={state}>{props.children}</CTX.Provider>;
};
