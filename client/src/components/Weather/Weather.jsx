import React, { useEffect, useState, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import Icon from "../Icon/Icon";
import { WeatherBar, FlexColumn } from "./Weather.styles";
import { CTX } from "../../context/Store";

const Weather = () => {
  const [isLoading, setLoading] = useState(true);
  const [state, doAction] = useContext(CTX);
  useEffect(() => {
    //fetch weather from darksky and store it in state so we can use it in our weather page
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
          process.env.REACT_APP_DARKSKY_API
        }/${position.coords.latitude},${position.coords.longitude}`
      )
        .then(res => res.json())
        .then(data => {
          doAction({ type: "SET_WEATHER", payload: data });
          doAction({ type: "SET_LOADING", payload: !state.loading });
          // console.log(data);
          // setLoading(false);
        });
    });
  }, []);

  return (
    <div>
      {state.loading ? (
        <Spinner />
      ) : (
        <WeatherBar>
          <Icon name={`${state.location.currently.icon}`} />
          {/* <Icon name="clear-day" /> */}
          <FlexColumn>
            <div>
              {Math.ceil(state.location.currently.apparentTemperature)}º
              <span>F</span>
            </div>
            <span>{state.location.currently.summary}</span>
          </FlexColumn>
        </WeatherBar>
      )}
    </div>
  );
};

export default Weather;
