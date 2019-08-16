import React from "react";
import { StyledDashPage } from "../styles/DashboardPage.styles";
import { CTX } from "../context/Store";
import Icon from "../components/Icon/Icon";
import { WeatherTitle } from "./WeatherPage/WeatherPage.styles";

import Spinner from "../components/Spinner/Spinner";
const WeatherPage = () => {
  const [state, doAction] = React.useContext(CTX);
  console.log(state.location);
  return (
    <StyledDashPage sidebar={state.sidebar}>
      <WeatherTitle>WeatherPage</WeatherTitle>
      {state.loading ? (
        <Spinner />
      ) : (
        <div>
          <ul>
            {state.location.daily.data.map(day => (
              <li>
                <Icon name={day.icon} />
                {day.summary}
                {day.temperatureHigh} / {day.temperatureLow}
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledDashPage>
  );
};

export default WeatherPage;
