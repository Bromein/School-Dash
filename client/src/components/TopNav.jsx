import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { StyledTopNav } from "../styles/TopNav.styles";
import { ReactComponent as MenuButton } from "../assets/icons/menu.svg";
import { ReactComponent as Notifications } from "../assets/icons/notification.svg";
// import { ReactComponent as Avatar } from "../assets/icons/avatar.svg";
import Weather from "./Weather/Weather";

import { CTX } from "../context/Store";

const TopNav = ({ history }) => {
  const { user, setUser, sideBar, setSideBar } = useContext(CTX);

  const logOut = () => {
    sessionStorage.clear();
    setUser({});
  };

  return (
    <StyledTopNav sidebar={sideBar}>
      <MenuButton className="pancake" onClick={() => setSideBar(!sideBar)} />
      <div>
        <input placeholder="Search" type="search" name="" id="" />
      </div>
      <Weather />
      <div className="profile-buttons">
        {user ? (
          <>
            <Notifications className="notification" />
            <span className="profile" onClick={() => console.log("click")}>
              {user.name}
            </span>
            <span className="profile" onClick={logOut}>
              Log Out
            </span>
          </>
        ) : (
          <p>
            <Link to="/login">
              <span className="login-signup">Log In</span>
            </Link>

            <Link to="/signup">
              <span className="login-signup">Sign Up</span>
            </Link>
          </p>
        )}

        {/* <Avatar /> */}
      </div>
    </StyledTopNav>
  );
};
export default withRouter(TopNav);
