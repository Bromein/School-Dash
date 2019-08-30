import React, { useContext } from "react";
import { CTX } from "../context/Store";

import Icon from "../components/Icon/Icon";
import Spinner from "../components/Spinner/Spinner";
import {
  StyledWeatherPage,
  WeatherTitle,
  DayTitle,
  WeatherCard,
  WeatherSummary,
  WeatherTemperature
} from "./WeatherPage/WeatherPage.styles";
import { BreadCrumb } from "../styles/BreadCrumb";

const convertEpoch = time => {
  let day = new Date(time * 1000);

  return day.toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
};

const WeatherPage = ({ match }) => {
  const { location, sideBar } = useContext(CTX);

  return (
    <StyledWeatherPage sidebar={sideBar}>
      <BreadCrumb>Home{match.path}</BreadCrumb>
      <WeatherTitle>7 day forecast</WeatherTitle>

      {!location.daily ? (
        <Spinner big />
      ) : (
        <>
          {location.daily.data.map((day, index) => (
            <WeatherCard key={index}>
              <DayTitle>{convertEpoch(day.time)}</DayTitle>
              <Icon className="cardIcon" name={day.icon} />
              <span>
                <WeatherSummary>{day.summary}</WeatherSummary>
                <WeatherTemperature>
                  {Math.round(day.temperatureHigh)}ºF /{" "}
                  {Math.round(day.temperatureLow)}ºF
                </WeatherTemperature>
                Chance of rain: {Math.round(day.precipProbability * 100)} %
              </span>
            </WeatherCard>
          ))}
        </>
      )}
    </StyledWeatherPage>
  );
};

export default WeatherPage;
