import React from "react";
import { StyledEmployeeCard, ActionBar } from "./EmployeeCard.styles";
import { ReactComponent as Delete } from "../../assets/icons/trash.svg";
import { ReactComponent as Edit } from "../../assets/icons/pencil.svg";
const EmployeeCard = ({
  employee: { staff_name, staff_position, staff_salary, hire_date }
}) => {
  return (
    <StyledEmployeeCard>
      <ActionBar>
        <Edit className="edit" />
        <Delete className="delete" />
      </ActionBar>
      <h1>{staff_name}</h1>
      <h2>{staff_position}</h2>
      <h3>Hired on: {hire_date}</h3>
      <h3>salary: {Number(staff_salary) / 1000}k</h3>
    </StyledEmployeeCard>
  );
};

export default EmployeeCard;
