import { types } from "./types";

export default (state, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return { ...state, sidebar: action.payload };
    case types.ADD_EMPLOYEE:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
};
