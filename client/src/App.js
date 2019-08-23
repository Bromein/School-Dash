import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PrivateRoute from "./components/PrivateRoute";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import LogIn from "./components/Login/LogIn";

import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";
import StaffPage from "./pages/StaffPage";
import BudgetPage from "./pages/BudgetPage";
import StatsPage from "./pages/StatsPage";
import WeatherPage from "./pages/WeatherPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

import { GridWrap } from "./styles/App.styles";
import Store from "./context/Store";
import SignUp from "./pages/SignUp/SignUp";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Store>
        <GridWrap>
          <GlobalStyle />
          {/* {sideBarStatus && <SideNav />} */}
          <SideNav />
          <TopNav />
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPage} />
            <PrivateRoute exact path="/staff" component={StaffPage} />
            <PrivateRoute exact path="/dash" component={DashboardPage} />
            <PrivateRoute exact path="/budget" component={BudgetPage} />
            <PrivateRoute exact path="/stats" component={StatsPage} />
            <PrivateRoute exact path="/stats" component={StatsPage} />
            <PrivateRoute exact path="/weather" component={WeatherPage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact component={NotFound} />
          </Switch>
        </GridWrap>
      </Store>
    </ThemeProvider>
  );
}

export default App;

//dash
//staff
//budget
//stats
//notification
//hamburger
