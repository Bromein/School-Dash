import React, { useContext, useEffect } from "react";

import { Route, Redirect } from "react-router-dom";
import { CTX } from "../context/Store";

//temporary auth toy
const isAuthenticated = doAction => {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          fetch(`/api/profile/${data.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            }
          })
            .then(res => res.json())
            .then(user => {
              if (user && user.email) {
                doAction({
                  type: "SET_USER",
                  payload: user
                });
                // history.push("/");
              }
            });
        }
      })
      .catch(err => console.log(err));
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, doAction] = useContext(CTX);

  useEffect(() => {
    isAuthenticated(doAction);
  }, []);

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
