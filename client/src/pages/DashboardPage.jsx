import React from "react";

import { BreadCrumb } from "../styles/BreadCrumb";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import Card from "../components/Card/Card";
import { CTX } from "../context/Store";
import MonthlySalaryCosts from "../components/MonthlySalaryCosts/MonthlySalaryCosts";
import Spinner from "../components/Spinner/Spinner";

const Dashboard = ({ match }) => {
  const { staff, sideBar, news, user } = React.useContext(CTX);

  console.log("news", news);
  return (
    <StyledDashPage sidebar={sideBar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>

      {news && (
        <Card
          onClick={() => {}}
          full
          header="Top News"
          footer={news && news.author}
        >
          {news ? (
            <div
              style={{
                textAlign: "center"
              }}
            >
              {news.content}
            </div>
          ) : (
            <Spinner />
          )}
        </Card>
      )}
      <MonthlySalaryCosts half />
      {staff.length > 0 && (
        <Card quarter money stats header="Staff stats">
          <div className="legend">
            <span>Hire Date</span>
            <span>Employee</span>
            <span>Salary</span>
          </div>
          {staff.length &&
            staff.slice(0, 5).map(person => (
              <>
                <div className="employee-breakdown" key={person.id}>
                  <span className="hire-date">{person.hire_date}</span>
                  <span>{person.staff_name}</span>
                  <span>${person.staff_salary / 1000}k</span>
                </div>
              </>
            ))}
        </Card>
      )}

      <Card header="Current Budget">{user.budget}</Card>
    </StyledDashPage>
  );
};
export default Dashboard;
