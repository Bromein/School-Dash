import React from "react";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import Card from "../components/Card/Card";
import { CTX } from "../context/Store";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";
import Spinner from "../components/Spinner/Spinner";

const Dashboard = ({ match, history }) => {
  const { staff, sideBar, quote, budget } = React.useContext(CTX);
  console.log(budget);
  return (
    <StyledDashPage
      style={{ gridTemplateRows: "3rem .5fr 1fr 1fr" }}
      sidebar={sideBar}
    >
      <BreadCrumb>Home{match.path}</BreadCrumb>

      {quote && (
        <Card onClick={() => {}} full header="Quote of the Day">
          {quote ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontFamily: "OpenSansCondensed",
                letterSpacing: ".1rem"
              }}
            >
              {quote.content}
            </div>
          ) : (
            <Spinner />
          )}
        </Card>
      )}
      <MonthlySalaryCosts half />
      {staff.length > 0 && (
        <Card
          onClick={() => history.push("/staff")}
          quarter
          money
          stats
          header="Staff stats"
          style={{ cursor: "pointer" }}
        >
          <div className="legend">
            <span>Hire Date</span>
            <span>Employee</span>
            <span>Salary</span>
          </div>
          {staff.length &&
            staff.slice(0, 5).map(person => (
              <div className="employee-breakdown" key={person.id}>
                <span className="hire-date">{person.hire_date}</span>
                <span>{person.staff_name}</span>
                <span>${person.staff_salary / 1000}k</span>
              </div>
            ))}
        </Card>
      )}

      <Card header="Current Budget">{"HEHE"}</Card>
      <Card full header="Monthly Focus">
        FOCUS
      </Card>
    </StyledDashPage>
  );
};
export default Dashboard;
