import React from "react";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";

const StatsPage = () => {
  const [state, doAction] = React.useContext(CTX);

  return (
    <StyledDashPage sidebar={state.sidebar}>
      <h1>Stats Page</h1>
    </StyledDashPage>
  );
};
export default StatsPage;
