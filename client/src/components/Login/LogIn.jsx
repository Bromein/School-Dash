import React, { useState, useContext } from "react";
import { StyledDashPage } from "../../styles/DashboardPage.styles";
import { CTX } from "../../context/Store";
import { LoginForm } from "./Login.styles";

const LogIn = ({ history }) => {
  const { setUser } = useContext(CTX);

  const [values, setValues] = useState({
    email: "",
    secret: ""
  });

  const updateField = e => {
    //grab the field and update the corresponding value
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const setTokenToSession = token => {
    //can use sessionStorage or localStorage
    sessionStorage.setItem("token", token);
  };

  const handleSubmit = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.userId) {
          setTokenToSession(data.token);
          //set the user inside our context
          fetch(`/api/profile/${data.userId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: window.sessionStorage.getItem("token")
            }
          })
            .then(res => res.json())
            .then(data => {
              setUser({
                ...data
              });
            });
          history.push("/");
        }
      });
  };
  return (
    <StyledDashPage>
      <LoginForm>
        email:
        <input onChange={updateField} type="email" name="email" />
        password:
        <input onChange={updateField} type="password" name="secret" />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          Not a member? Sign up{" "}
          <span onClick={() => history.push("/signup")}>here</span>
        </div>
      </LoginForm>
    </StyledDashPage>
  );
};

export default LogIn;
