import React from "react";

import Card from "../Card/Card";
import { employeeData } from "../employeeData";
import { BigContent } from "../Card/Card.styles";

const MonthlySalaryCosts = ({ ...props }) => {
  return (
    <Card {...props} header="Monthly costs for employees">
      <BigContent>
        $
        {employeeData.reduce((accu, employee) => {
          return accu + employee.salary / 1000;
        }, 0)}
        k
      </BigContent>
    </Card>
  );
};
export default MonthlySalaryCosts;
