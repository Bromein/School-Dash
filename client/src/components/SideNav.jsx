import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Budget } from "../assets/icons/budget.svg";
import { ReactComponent as Stats } from "../assets/icons/stats.svg";
import { ReactComponent as Staff } from "../assets/icons/staff.svg";
import { ReactComponent as Dash } from "../assets/icons/dashboard.svg";
import { ReactComponent as Weather } from "../assets/icons/clear-day.svg";
import Logo from "../assets/icons/logo.png";

import { CTX } from "../context/Store";
import { SideNavContainer } from "../styles/SideNav.styles";

const SideNav = () => {
  const { sideBar } = useContext(CTX);

  return (
    <SideNavContainer sidebar={sideBar}>
      <p>
        <img src={Logo} alt={"Dashr Logo"} />
      </p>

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
        <li>
          <Weather />
          <Link to="/weather">Weather</Link>
        </li>
      </ul>
      <div>
        <p>Upgrade To Pro</p>
      </div>
    </SideNavContainer>
  );
};

export default SideNav;
