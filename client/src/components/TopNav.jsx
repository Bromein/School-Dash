import React, { useContext } from "react";
import { StyledTopNav } from "../styles/TopNav.styles";
import { ReactComponent as MenuButton } from "../assets/icons/menu.svg";
import { ReactComponent as Notifications } from "../assets/icons/notification.svg";
import { ReactComponent as Avatar } from "../assets/icons/avatar.svg";
import Weather from "./Weather/Weather";

import { CTX } from "../context/Store";

const TopNav = () => {
  const [state, doAction] = useContext(CTX);
  console.log(state);
  return (
    <StyledTopNav sidebar={state.sidebar}>
      <MenuButton
        className="pancake"
        onClick={() =>
          doAction({
            type: "TOGGLE_SIDEBAR",
            payload: !state.sidebar
          })
        }
      />
      <div>
        <input placeholder="Search" type="search" name="" id="" />
      </div>
      <Weather />
      <div className="profile-buttons">
        <Notifications className="notification" />
        {state.user && state.user.userId}
        <Avatar />
      </div>
    </StyledTopNav>
  );
};
export default TopNav;
