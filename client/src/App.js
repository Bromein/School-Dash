import React, { useContext, useEffect } from "react";
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
import { CTX } from "./context/Store";

import { GridWrap } from "./styles/App.styles";
import SignUp from "./pages/SignUp/SignUp";

function App(props) {
  const { user, staff, setStaff, news, setNews, quote, setQuote } = useContext(
    CTX
  );

  useEffect(() => {
    const fetchStaffForCurrentUser = async id => {
      if (user.id) {
        try {
          const token = sessionStorage.getItem("token");
          const data = await fetch(`/api/staff/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            }
          });
          const staffData = await data.json();
          setStaff(staffData);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchStaffForCurrentUser(user.id);

    const fetchQuote = async () => {
      if (!quote.id) {
        try {
          const randomQuote = await fetch("/api/quote", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
          const quoteData = await randomQuote.json();

          setQuote(quoteData);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchQuote();
  }, [user, staff.length, setStaff, quote, setQuote]);

  return (
    <ThemeProvider theme={theme}>
      <GridWrap>
        <GlobalStyle />
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
