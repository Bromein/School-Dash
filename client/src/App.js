import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import LogIn from "./components/LogIn";

import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";
import StaffPage from "./pages/StaffPage";
import BudgetPage from "./pages/BudgetPage";
import StatsPage from "./pages/StatsPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GridWrap } from "./styles/App.styles";

function App(props) {
  const [sideBarStatus, setSideBarStatus] = useState(true);

  const toggleSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };

  return (
    <GridWrap>
      <GlobalStyle />
      {sideBarStatus && <SideNav />}
      <TopNav toggleSideBar={toggleSideBar} />
      <Switch>
        <PrivateRoute exact path="/" component={DashboardPage} />
        <PrivateRoute exact path="/staff" component={StaffPage} />
        <PrivateRoute exact path="/dash" component={DashboardPage} />
        <PrivateRoute exact path="/budget" component={BudgetPage} />
        <PrivateRoute exact path="/stats" component={StatsPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact component={NotFound} />
      </Switch>
    </GridWrap>
  );
}

export default App;

//dash
//staff
//budget
//stats
//notification
//hamburger
