import React, { useState, useContext } from "react";
import { EmployeeForm } from "./AddEmployeeForm.styles";
import { CTX } from "../../context/Store";

const AddEmployeeForm = ({ formVisible, setFormVisible, ...props }) => {
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
    })
      .then(setEmployeeDetails(initState))
      .then(setStaff(...staff, employeeDetails))
      .then(setFormVisible(!formVisible));

    // setStaff(...staff, employeeDetails);
    // setFormVisible(!formVisible);
  };

  return (
    <EmployeeForm formVisible={formVisible}>
      <span>
        <label>Full Name</label>
        <input
          onChange={updateField}
          value={employeeDetails.staffName}
          type="text"
          name="staffName"
          autoComplete="off"
        />
      </span>

      <span>
        <label>Position</label>
        <input
          onChange={updateField}
          value={employeeDetails.staffPosition}
          type="text"
          name="staffPosition"
          autoComplete="off"
        />
      </span>

      <span>
        <label>Hire Date</label>
        <input
          onChange={updateField}
          value={employeeDetails.hireDate}
          type="date"
          name="hireDate"
          autoComplete="off"
        />
      </span>

      <span>
        <label>Salary</label>
        <input
          onChange={updateField}
          value={employeeDetails.staffSalary}
          type="number"
          name="staffSalary"
          autoComplete="off"
        />
      </span>
      <button onClick={handleSubmit}>Add</button>
    </EmployeeForm>
  );
};
export default AddEmployeeForm;
