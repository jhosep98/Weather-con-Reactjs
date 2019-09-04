import React, { Component } from "react";
import styled from "styled-components";

import logo from "./img/logo.png";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";

const Img = styled.img`
  height: 60px;
  weight: 100px;
  margin-right: 40px;
`;

import { WEATHER_KEY } from "./keys";

class App extends Component {
  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null
  };

  getWeather = async e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric `;
      const response = await fetch(API_URL);
      const data = await response.json();

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        mainWeatherCondition: data.weather && data.weather[0].main,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      });
    } else {
      this.setState({ error: "Please enter a city and a country" });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Welcome
          </a>
          <h1 className="navbar-brand">
            {" "}
            <Img src={logo}></Img>{" "}
          </h1>
        </nav>
        <p className="description">The weather forecast with JdbWeather !!</p>

        <div className="row">
          <div className="col-md-4 mx-auto">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
