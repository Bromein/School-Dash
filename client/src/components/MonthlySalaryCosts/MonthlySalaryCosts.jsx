import React from "react";

import Card from "../Card/Card";
import { BigContent } from "../Card/Card.styles";
import { CTX } from "../../context/Store";
import Spinner from "../Spinner/Spinner";

const MonthlySalaryCosts = ({ ...props }) => {
  const { staff } = React.useContext(CTX);

  const renderEmployeePayout = staff => {
    return (
      <>
        $
        {staff.reduce((accu, employee) => {
          return accu + Math.round(employee.staff_salary / 1000 / 12);
        }, 0)}
        k
      </>
    );
  };
  return (
    <Card {...props} header="Payroll">
      <BigContent>
        {staff.length ? (
          renderEmployeePayout(staff)
        ) : (
          <p>Get started by adding your staff!</p>
        )}
      </BigContent>
    </Card>
  );
};
export default MonthlySalaryCosts;
