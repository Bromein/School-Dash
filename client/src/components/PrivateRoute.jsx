import React, { useContext, useEffect } from "react";

import { Route, Redirect } from "react-router-dom";
import { CTX } from "../context/Store";

//temporary auth toy
const isAuthenticated = async (setUser, setBudget) => {
  const token = sessionStorage.getItem("token");
  try {
    if (token) {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      });
      const data = await res.json();
      if (data && data.id) {
        const res = await fetch(`/api/profile/${data.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        });
        const user = await res.json();
        if (user && user.email) {
          setUser(user);
          setBudget(user.budget);
        }
      }
    }
  } catch (err) {
    console.log("YOOOO");
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { setUser, setBudget } = useContext(CTX);

  useEffect(() => {
    isAuthenticated(setUser, setBudget);
  }, [setUser, setBudget]);

  return (
    <Route
      {...rest}
      render={props =>
        window.sessionStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;

//play with private route tomorrow, user is not rendering properly
