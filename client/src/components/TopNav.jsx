import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { StyledTopNav } from "../styles/TopNav.styles";
import { ReactComponent as MenuButton } from "../assets/icons/menu.svg";
import { ReactComponent as Notifications } from "../assets/icons/notification.svg";
// import { ReactComponent as Avatar } from "../assets/icons/avatar.svg";
import Weather from "./Weather/Weather";

import { CTX } from "../context/Store";

const TopNav = ({ history }) => {
  const [state, doAction] = useContext(CTX);

  const logOut = () => {
    sessionStorage.clear();
  };

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
        {state.user ? (
          <>
            <Notifications className="notification" />
            <span className="profile" onClick={() => console.log("click")}>
              {state.user.name}
            </span>
            <span className="profile" onClick={logOut}>
              Log Out
            </span>
          </>
        ) : (
          <p>Login | SignUp</p>
        )}

        {/* <Avatar /> */}
      </div>
    </StyledTopNav>
  );
};
export default withRouter(TopNav);
