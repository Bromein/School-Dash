import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";
import { employeeData } from "../components/employeeData";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";

const StaffPage = ({ match }) => {
  const [employees, setEmployees] = useState([]);
  const [state, doAction] = React.useContext(CTX);

  const updateEmployees = employee => {
    setEmployees([...employees, { name: employee.name, age: employee.age }]);
    console.log(employees);
  };
  return (
    <StyledDashPage sidebar={state.sidebar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>
      <MonthlySalaryCosts full />
      {employeeData.map(employee => (
        <EmployeeCard key={employee.name} employee={employee} />
      ))}
    </StyledDashPage>
  );
};
export default StaffPage;
