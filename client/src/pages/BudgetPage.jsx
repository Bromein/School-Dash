import React from "react";

import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";

const BudgetPage = () => {
  const [state, doAction] = React.useContext(CTX);
  return (
    <StyledDashPage sidebar={state.sidebar}>
      <h1>Budget Page</h1>
    </StyledDashPage>
  );
};
export default BudgetPage;
