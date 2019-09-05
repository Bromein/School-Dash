import React from "react";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import Card from "../components/Card/Card";
import { CTX } from "../context/Store";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";
import Spinner from "../components/Spinner/Spinner";

const Dashboard = ({ match, history }) => {
  const { staff, sideBar, quote, budget } = React.useContext(CTX);

  return (
    <StyledDashPage
      style={{ gridTemplateRows: "3rem .5fr 1fr 1fr" }}
      sidebar={sideBar}
    >
      <BreadCrumb>Home{match.path}</BreadCrumb>

      {quote && (
        <Card inspire onClick={() => {}} full header="Quote of the Day">
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

      <Card
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/budget")}
        header="Current Budget"
      >
        ${budget / 1000}k
      </Card>
      <Card motive full header="Monthly Focus"></Card>
    </StyledDashPage>
  );
};
export default Dashboard;
