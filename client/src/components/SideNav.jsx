import React from "react";
import { Link, Route } from "react-router-dom";
import { SideNavContainer } from "../styles/SideNav.styles";
import StaffPage from "../pages/StaffPage";

import { ReactComponent as Budget } from "../assets/icons/budget.svg";
import { ReactComponent as Stats } from "../assets/icons/stats.svg";
import { ReactComponent as Staff } from "../assets/icons/staff.svg";
import { ReactComponent as Dash } from "../assets/icons/dashboard.svg";
const SideNav = () => {
  return (
    <SideNavContainer>
      <p>School Dash</p>
      <ul>
        <li>
          <Dash />
          <Link to="/dash">Dashboard</Link>
        </li>
        <li>
          <Staff />
          <Link to="/staff">Staff</Link>
        </li>
        <li>
          <Budget />
          <Link to="/budget">Budget</Link>
        </li>
        <li>
          <Stats />
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
      <span>Upgrade to pro</span>
    </SideNavContainer>
  );
};

export default SideNav;
