import React, { useState, useContext } from "react";
import { EmployeeForm } from "./AddEmployeeForm.styles";
import { CTX } from "../../context/Store";

const AddEmployeeForm = () => {
  const [state, doAction] = useContext(CTX);
  const [employeeDetails, setEmployeeDetails] = useState({
    id: "",
    staffName: "",
    staffPosition: "",
    staffSalary: null,
    hireDate: ""
  });

  const updateField = e => {
    //grab the field and update the corresponding value
    setEmployeeDetails({
      ...employeeDetails,
      id: state.user.id,
      [e.target.name]: e.target.value
    });
    console.log(employeeDetails);
  };

  const handleSubmit = () => {
    fetch("/api/staff", {
      method: "POST",
      body: JSON.stringify(employeeDetails),
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token")
      }
    });
  };
  return (
    <EmployeeForm>
      <h1>Add Employee Form</h1>

      <span>
        <label>Full Name</label>
        <input onChange={updateField} type="text" name="staffName" />
      </span>

      <span>
        <label>Position</label>
        <input onChange={updateField} type="text" name="staffPosition" />
      </span>

      <span>
        <label>Hire Date</label>
        <input onChange={updateField} type="date" name="hireDate" />
      </span>

      <span>
        <label>Salary</label>
        <input onChange={updateField} type="number" name="staffSalary" />
      </span>
      <button onClick={handleSubmit}>Add</button>
    </EmployeeForm>
  );
};
export default AddEmployeeForm;
