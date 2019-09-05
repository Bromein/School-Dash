import React, { useContext, useState } from "react";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import AddEmployeeForm from "../components/AddEmployeeForm/AddEmployeeForm";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";
import { sortByName } from "../utils/helpers";

import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";
import Spinner from "../components/Spinner/Spinner";
import Card from "../components/Card/Card";
const StaffPage = ({ match }) => {
  const { staff, setStaff, sideBar } = useContext(CTX);
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleSort = () => {
    const localStaff = [...staff.sort(sortByName)];
    setStaff(localStaff);
  };

  console.log(staff);
  return (
    <StyledDashPage sidebar={sideBar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>
      <MonthlySalaryCosts employeeData={staff} full />
      <AddEmployeeForm
        setFormVisible={setFormVisible}
        formVisible={formVisible}
      />
      {formVisible || (
        <Card
          style={{ p: "center" }}
          header="Add an employee"
          money
          onClick={toggleFormVisibility}
        >
          <span role="img" aria-label="plus">
            ➕
          </span>
        </Card>
      )}
      <div onClick={handleSort}>Sort alphabetical</div>
      {staff.length ? (
        staff.map((employee, idx) => (
          <EmployeeCard key={idx} employee={employee} />
        ))
      ) : (
        <div style={{ justifySelf: "center" }}>
          No staff found, please add some!
        </div>
      )}
    </StyledDashPage>
  );
};
export default StaffPage;
