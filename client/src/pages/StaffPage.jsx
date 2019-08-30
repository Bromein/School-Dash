import React, { useContext } from "react";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import AddEmployeeForm from "../components/AddEmployeeForm/AddEmployeeForm";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";
import Spinner from "../components/Spinner/Spinner";

const StaffPage = ({ match }) => {
  const { staff, sideBar } = useContext(CTX);
  // useEffect(() => {
  //   if (user.id) {
  //     fetchStaffForCurrentUser(user.id);
  //   }
  // }, [user, staff.length]);

  console.log("StaffPage.js and this is what I know about the staff:", staff);

  // const fetchStaffForCurrentUser = async id => {
  //   try {
  //     const token = sessionStorage.getItem("token");
  //     const data = await fetch(`/api/staff/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token
  //       }
  //     });
  //     const staffData = await data.json();
  //     setStaff(staffData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <StyledDashPage sidebar={sideBar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>
      <MonthlySalaryCosts employeeData={staff} full />
      <AddEmployeeForm />

      {staff.length ? (
        staff.map((employee, idx) => (
          <EmployeeCard key={idx} employee={employee} />
        ))
      ) : (
        <Spinner />
      )}
    </StyledDashPage>
  );
};
export default StaffPage;
