import React from "react";
import AddBudgetForm from "../components/AddBudgetForm/AddBudgetForm";
import { mapIndexToMonth } from "../utils/helpers";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import {
  CurrentBudget,
  StyledBudgetPage
} from "./BudgetPage/BudgetPage.styles";
import Card from "../components/Card/Card";

import { CTX } from "../context/Store";

const BudgetPage = ({ history }) => {
  const { sideBar, user } = React.useContext(CTX);

  const handleRender = () => {
    const budget = user.budget;

    if (!budget) {
      return <AddBudgetForm history={history} userId={user.id} />;
    } else {
      return (
        <StyledBudgetPage>
          <CurrentBudget>
            {mapIndexToMonth()}'s budget: ${user.budget}
            <h2>Revenue forecast: </h2>
          </CurrentBudget>
          <Card header={"Category 1"}>
            {/* <h1>Category 1</h1> */}
            <p>Actual +/-</p>
            <p>Currently over/under by ---</p>
          </Card>
          <Card header={"Category 2"}>
            {/* <h1>Category 2</h1> */}
            <p>Actual +/-</p>
            <p>Currently over/under by ---</p>
          </Card>
        </StyledBudgetPage>
      );
    }
  };

  return <StyledDashPage sidebar={sideBar}>{handleRender()}</StyledDashPage>;
};
export default BudgetPage;
