import React, { useState } from "react";
// import { types } from "./types";

export const CTX = React.createContext();

export default props => {
  const [sideBar, setSideBar] = useState(true);
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [staff, setStaff] = useState([]);
  const [budget, setBudget] = useState(0);
  const [news, setNews] = useState({});
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD_STAFF":
  //       return { ...state, }
  //   }
  // }

  // const staffContext = {
  //   staff: []
  // }

  const stateContext = {
    sideBar,
    setSideBar,
    location,
    setLocation,
    loading,
    setLoading,
    user,
    setUser,
    staff,
    setStaff,
    budget,
    setBudget,
    news,
    setNews
  };
  return <CTX.Provider value={stateContext}>{props.children}</CTX.Provider>;
};
// const reducer = (state, action) => {
//   switch (action.type) {
//     case types.TOGGLE_SIDEBAR:
//       return { ...state, sidebar: action.payload };
//     case types.SET_WEATHER:
//       return { ...state, location: action.payload };
//     case types.SET_LOADING:
//       return { ...state, loading: action.payload };
//     case types.SET_USER:
//       return { ...state, user: action.payload };
//     case types.LOG_OUT:
//       return { ...state, user: {} };
//     case types.GET_STAFF:
//       return { ...state, staff: action.payload };
//     default:
//       return state;
//   }
// };
