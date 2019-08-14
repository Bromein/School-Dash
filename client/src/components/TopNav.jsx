import React, { useContext } from "react";
import { StyledTopNav } from "../styles/TopNav.styles";
import { ReactComponent as MenuButton } from "../assets/icons/menu.svg";
import { ReactComponent as Notifications } from "../assets/icons/notification.svg";
import { ReactComponent as Avatar } from "../assets/icons/avatar.svg";

import { CTX } from "../context/Store";

const TopNav = () => {
  const [state, doAction] = useContext(CTX);

  return (
    <StyledTopNav sidebar={state.sidebar}>
      <MenuButton
        className="pancake"
        onClick={() =>
          doAction({
            type: "TOGGLE_SIDEBAR",
            payload: !state.sidebar,
          })
        }
      />
      <div>
        <input placeholder="Search" type="search" name="" id="" />
      </div>
      <div className="profile-buttons">
        <Notifications className="notification" />
        <Avatar />
      </div>
    </StyledTopNav>
  );
};
export default TopNav;
