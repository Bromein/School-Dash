import React from "react";
import { EmployeeForm } from "./AddEmployeeForm.styles";

const AddEmployeeForm = () => {
  return (
    <EmployeeForm>
      <h1>Add Employee Form</h1>

      <span>
        <label>First Name</label>
        <input type="text" name="name" />
      </span>
      <span>
        <label>Last Name</label>
        <input type="text" name="name" />
      </span>

      <span>
        <label>Position</label>
        <input type="text" name="position" />
      </span>

      <span>
        <label>Hire Date</label>
        <input type="date" name="hiredate" />
      </span>
    </EmployeeForm>
  );
};
export default AddEmployeeForm;
