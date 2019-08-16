import React from "react";
import { StyledEmployeeCard, ActionBar } from "./EmployeeCard.styles";
import { ReactComponent as Delete } from "../../assets/icons/trash.svg";
import { ReactComponent as Edit } from "../../assets/icons/pencil.svg";
const EmployeeCard = ({
  employee: { name, position, age, hireDate, skills, salary },
}) => {
  return (
    <StyledEmployeeCard>
      <ActionBar>
        <Edit className="edit" />
        <Delete className="delete" />
      </ActionBar>
      <h1>{name}</h1>
      <h2>{position}</h2>
      <h3>Hired on: {hireDate}</h3>
      <ul>
        {skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>
      <h3>salary: {salary / 1000.0}k</h3>
    </StyledEmployeeCard>
  );
};

export default EmployeeCard;
