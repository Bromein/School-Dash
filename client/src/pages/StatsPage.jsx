import React from "react";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";

const StatsPage = () => {
  const { sideBar } = React.useContext(CTX);

  return (
    <StyledDashPage sidebar={sideBar}>
      <h1>Stats Page</h1>
    </StyledDashPage>
  );
};
export default StatsPage;
