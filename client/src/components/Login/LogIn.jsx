import React, { useState, useContext } from "react";
import { StyledDashPage } from "../../styles/DashboardPage.styles";
import { CTX } from "../../context/Store";

const LogIn = () => {
  const [state, doAction] = useContext(CTX);

  const [values, setValues] = useState({
    email: "",
    secret: ""
  });

  const updateField = e => {
    //grab the field and update the corresponding value
    setValues({ ...values, [e.target.name]: e.target.value });
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
          //set the user inside our context
          doAction({ type: "SET_USER", payload: data });
        }
      });
  };
  return (
    <StyledDashPage>
      email:
      <input onChange={updateField} type="email" name="email" />
      password:
      <input onChange={updateField} type="password" name="secret" />
      <button onClick={handleSubmit}>Submit</button>
    </StyledDashPage>
  );
};

export default LogIn;
