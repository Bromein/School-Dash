import React from "react";
import { StyledTopNav } from "../styles/TopNav.styles";
import { ReactComponent as MenuButton } from "../assets/icons/menu.svg";
import { ReactComponent as Notifications } from "../assets/icons/notification.svg";
import { ReactComponent as Avatar } from "../assets/icons/menu.svg";
const TopNav = ({ toggleSideBar }) => {
  return (
    <StyledTopNav>
      <MenuButton className="pancake" onClick={toggleSideBar} />
      <div>
        <input type="search" name="" id="" />
        <button type="submit">Search</button>
      </div>
      <div className="profile-buttons">
        <Notifications />
        😁
      </div>
    </StyledTopNav>
  );
};
export default TopNav;
