import React from "react";

import { Switch, Link, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";

import { DashBoard } from "./styles/Dashboard.styles";

function App() {
  return (
    <DashBoard>
      <SideNav />
      <TopNav />
    </DashBoard>
  );
}

export default App;

//dash
//staff
//budget
//stats
//notification
//hamburger
