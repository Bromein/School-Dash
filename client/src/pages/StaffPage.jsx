import React, { useState, useEffect } from "react";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import AddEmployeeForm from "../components/AddEmployeeForm/AddEmployeeForm";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";
import { employeeData } from "../components/employeeData";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";

const StaffPage = ({ match }) => {
  const [employees, setEmployees] = useState([]);
  const [state, doAction] = React.useContext(CTX);

  const fetchStaffForCurrentUser = async id => {
    try {
      const token = window.sessionStorage.getItem("token");
      const data = await fetch(`/api/staff/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      });
      const posts = await data.json();
      console.log(posts);
    } catch (err) {
      console.log(err, "jeez louis");
    }
  };

  useEffect(() => {
    // const token = window.sessionStorage.getItem("token");
    // const { id } = state.user.id;
    fetchStaffForCurrentUser(state.user.id);
    // fetch("/api/staff/1", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: token
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }, [state]);

  const updateEmployees = employee => {
    setEmployees([...employees, { name: employee.name, age: employee.age }]);
  };
  return (
    <StyledDashPage sidebar={state.sidebar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>
      <MonthlySalaryCosts full />
      <AddEmployeeForm />
      {employeeData.map(employee => (
        <EmployeeCard key={Math.random() * 0.25} employee={employee} />
      ))}
    </StyledDashPage>
  );
};
export default StaffPage;
