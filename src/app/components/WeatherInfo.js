import React from "react";
import styled from "styled-components";

import iconSun from "../img/sun.png";
import iconCloudy from "../img/cloudy.png";
import iconCloud from "../img/cloud (1).png";
import iconRain from "../img/rain.png";
import humidity from "../img/humidity.png";
import wind from "../img/wind.png";
import city from "../img/city.png";

const Img = styled.img`
  padding: 2px;
  margin-left: 32px;
  width: 40px;
  height: 40px;
`;

const ICON_MAP = {
  Clear: <Img src={iconSun}></Img>,
  Clouds: <Img src={iconCloudy}></Img>,
  Haze: <Img src={iconCloud}></Img>,
  Rain: <Img src={iconRain}></Img>
};

const icon = mainWeatherCondition => ICON_MAP[mainWeatherCondition];

const WeatherInfo = props => {
  console.log(props);

  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}
      {props.temperature ? (
        <div className="card card-body">
          <p>
            Location: {props.city}, {props.country}
            <Img src={city}></Img>
          </p>
          <p>
            Temperature: {props.temperature} ℃, {props.description}{" "}
            {icon(props.mainWeatherCondition)}
          </p>
          <p>
            Humidity: {props.humidity}
            <Img src={humidity}></Img>
          </p>
          <p>
            Wind Speed: {props.wind_speed}
            <Img src={wind}></Img>
          </p>
        </div>
      ) : (
        <div className="card card-body">
          <p>No request Yet</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
