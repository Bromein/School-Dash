import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryPie,
} from "victory";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import Card from "../components/Card/Card";
import GraphCard from "../components/GraphCard/GraphCard";
import { CTX } from "../context/Store";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";

const tempData2017 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const tempData2018 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 19000 },
];
const tempData2019 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
];

const whereMyMoneyAt = [
  { x: "Teachers", y: 30 },
  { x: "Food", y: 30 },
  { x: "Cleaning", y: 40 },
];

const Dashboard = ({ match }) => {
  const [state, doAction] = React.useContext(CTX);

  return (
    <StyledDashPage sidebar={state.sidebar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>
      <GraphCard>
        <VictoryPie
          theme={VictoryTheme.material}
          padding={{ left: 80, right: 80 }}
          data={whereMyMoneyAt}
          cornerRadius={10}
        />
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
          <VictoryStack>
            <VictoryBar data={tempData2017} x="quarter" y="earnings" />
            <VictoryBar data={tempData2018} x="quarter" y="earnings" />
            <VictoryBar data={tempData2019} x="quarter" y="earnings" />
          </VictoryStack>
        </VictoryChart>
        <VictoryPie padding={{ left: 80, right: 80 }} data={whereMyMoneyAt} />
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
          <VictoryStack>
            <VictoryBar data={tempData2017} x="quarter" y="earnings" />
            <VictoryBar data={tempData2018} x="quarter" y="earnings" />
            <VictoryBar data={tempData2019} x="quarter" y="earnings" />
          </VictoryStack>
        </VictoryChart>
      </GraphCard>
      <Card body="Tester card" header="The Test Card" footer="Test Footer">
        <div>Hello from the inside</div>
        <div>Hello from the inside</div>
        <div>Hello from the inside</div>
        <div>Hello from the inside</div>
        <div>Hello from the inside</div>
      </Card>
      <MonthlySalaryCosts half />
      <Card body="Tester card" header="The Test Card" footer="Test Footer" />
      <Card body="Tester card" header="The Test Card" footer="Test Footer" />
      <Card
        full
        body="Big Tester card"
        header="The Test Card"
        footer="Test Footer"
      />
      <Card body="Tester card" header="The Test Card" footer="Test Footer" />
      <Card body="Tester card" header="The Test Card" footer="Test Footer" />
      <Card body="Tester card" header="The Test Card" footer="Test Footer" />
      <Card body="Tester card" header="The Test Card" footer="Test Footer" />
      <Card
        quarter
        body="Tester card"
        header="The Test Card"
        footer="Test Footer"
      />
    </StyledDashPage>
  );
};
export default Dashboard;
