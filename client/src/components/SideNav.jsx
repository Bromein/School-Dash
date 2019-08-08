import React from "react";

import { SideNavContainer } from "../styles/SideNav.styles";
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
          Dashboard
        </li>
        <li>
          <Staff />
          Staff
        </li>
        <li>
          <Budget />
          Budget
        </li>
        <li>
          <Stats />
          Stats
        </li>
      </ul>
      <span>Upgrade to pro</span>
    </SideNavContainer>
  );
};

export default SideNav;
