import React from "react";

import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";

const BudgetPage = () => {
  const { sideBar } = React.useContext(CTX);
  return (
    <StyledDashPage sidebar={sideBar}>
      <h1>Budget Page</h1>
    </StyledDashPage>
  );
};
export default BudgetPage;
