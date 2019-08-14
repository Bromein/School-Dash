import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";
import { employeeData } from "../components/employeeData";
import Card from "../components/Card";

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
      <Card full header="Monthly costs for employees">
        <div>
          $
          {employeeData.reduce((accu, employee) => {
            return accu + employee.salary / 1000;
          }, 0)}
          k
        </div>
      </Card>
      {employeeData.map(employee => (
        <EmployeeCard key={employee.name} employee={employee} />
      ))}
    </StyledDashPage>
  );
};
export default StaffPage;
