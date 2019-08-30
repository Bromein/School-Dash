import React, { useState } from "react";
import { StyledDashPage } from "../../styles/DashboardPage.styles";
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    secret: ""
  });

  const updateField = e => {
    //grab the field and update the corresponding value
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log("datasz"));
  };
  return (
    <StyledDashPage>
      name:
      <input onChange={updateField} type="text" name="name" />
      email:
      <input onChange={updateField} type="email" name="email" />
      password:
      <input onChange={updateField} type="password" name="secret" />
      <button onClick={handleSubmit}>Submit</button>
    </StyledDashPage>
  );
};

export default SignUp;
