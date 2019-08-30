import React, { useEffect, useState, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import Icon from "../Icon/Icon";
import { WeatherBar, FlexColumn } from "./Weather.styles";
import { CTX } from "../../context/Store";

const Weather = () => {
  const { location, setLocation } = useContext(CTX);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch weather from darksky and store it in state so we can use it in our weather page
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
            process.env.REACT_APP_DARKSKY_API
          }/${position.coords.latitude},${position.coords.longitude}`
        )
          .then(res => res.json())
          .then(data => {
            setLocation({ ...data });
            setLoading(false);
          });
      });
    };
    fetchLocation();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <WeatherBar>
          <Icon name={location.currently.icon} />
          {/* <Icon name="clear-day" /> */}
          <FlexColumn>
            <div>
              {Math.ceil(location.currently.temperature)}º<span>F</span>
            </div>
            <span>{location.currently.summary}</span>
          </FlexColumn>
        </WeatherBar>
      )}
    </div>
  );
};

export default Weather;
