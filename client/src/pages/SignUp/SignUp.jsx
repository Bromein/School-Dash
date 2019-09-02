import React, { useState, useContext } from "react";
import { StyledDashPage } from "../../styles/DashboardPage.styles";
import { SignUpForm } from "./SignUp.styles";
import { CTX } from "../../context/Store";

const SignUp = ({ history }) => {
  const { setUser } = useContext(CTX);
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
      .then(data => {
        if (data.id && data.email) {
          setUser(data);
          history.push("/");
          /* //TODO
              In later feature fetch login and set token here
              so user does not have to log in after creating account
          */
        }
      });
  };
  return (
    <StyledDashPage>
      <SignUpForm>
        name:
        <input onChange={updateField} type="text" name="name" />
        email:
        <input onChange={updateField} type="email" name="email" />
        password:
        <input onChange={updateField} type="password" name="secret" />
        <button onClick={handleSubmit}>Submit</button>
      </SignUpForm>
    </StyledDashPage>
  );
};

export default SignUp;
