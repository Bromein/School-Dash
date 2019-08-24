import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import { CTX } from "../context/Store";

//temporary auth toy
const isAuthenticated = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, doAction] = useContext(CTX);
  return (
    <Route
      {...rest}
      render={props =>
        state.user ? (
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
