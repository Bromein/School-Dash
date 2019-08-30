import React, { useState, useContext } from "react";
import { EmployeeForm } from "./AddEmployeeForm.styles";
import { CTX } from "../../context/Store";

const AddEmployeeForm = () => {
  const { user, staff, setStaff } = useContext(CTX);

  const initState = {
    id: user.id,
    staffName: "",
    staffPosition: "",
    staffSalary: "",
    hireDate: ""
  };
  const [employeeDetails, setEmployeeDetails] = useState(initState);

  const updateField = e => {
    //grab the field and update the corresponding value
    setEmployeeDetails({
      ...employeeDetails,
      id: user.id,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    fetch("/api/staff", {
      method: "POST",
      body: JSON.stringify(employeeDetails),
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token")
      }
    });
    setEmployeeDetails(initState);
    setStaff(...staff, employeeDetails);
  };

  return (
    <EmployeeForm>
      <h1>Add Employee Form</h1>

      <span>
        <label>Full Name</label>
        <input
          onChange={updateField}
          value={employeeDetails.staffName}
          type="text"
          name="staffName"
        />
      </span>

      <span>
        <label>Position</label>
        <input
          onChange={updateField}
          value={employeeDetails.staffPosition}
          type="text"
          name="staffPosition"
        />
      </span>

      <span>
        <label>Hire Date</label>
        <input
          onChange={updateField}
          value={employeeDetails.hireDate}
          type="date"
          name="hireDate"
        />
      </span>

      <span>
        <label>Salary</label>
        <input
          onChange={updateField}
          value={employeeDetails.staffSalary}
          type="number"
          name="staffSalary"
        />
      </span>
      <button onClick={handleSubmit}>Add</button>
    </EmployeeForm>
  );
};
export default AddEmployeeForm;
