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
          return accu + Math.round(employee.staff_salary / 1000);
        }, 0)}
        k
      </>
    );
  };
  return (
    <Card {...props} header="Monthly costs for employees">
      <BigContent>
        {staff.length ? renderEmployeePayout(staff) : <Spinner />}
      </BigContent>
    </Card>
  );
};
export default MonthlySalaryCosts;
