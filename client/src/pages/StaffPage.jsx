import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";

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
      <EmployeeCard employees={employees} updateEmployees={updateEmployees} />
    </StyledDashPage>
  );
};
export default StaffPage;
