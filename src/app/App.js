import React, { Component } from "react";
import styled from "styled-components";

import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import github from './img/github.png'

const Nav = styled.nav`
  height: 70px;
  weight: 100%;
  background-color:#20232a;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  h1{
  font-size:30px;
  font-family:IBrushstroke, fantasy;
  color:#61dafb;
  }
`;
const Div = styled.div`
  width:100%;
  height:auto;
  display:flex;
  justify-content:flex-end;
  margin-top:10px;
  img{
    width:40px;
    height:40px;
    margin-right:20px;
  }
  p{
    margin-top:10px;
    margin-right:5px;
    color:#20232a;
  }
`

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
      const API_URL = `//api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric `;
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
        <Nav>
          <h1>JdbWeather</h1>
        </Nav>
        <p className="description">The weather forecast with JdbWeather</p>

        <div className="row">
          <div className="col-md-4 mx-auto">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
        <Div><p>Source code:</p><a href="https://github.com/jhosep98/Weather-con-Reactjs" target='blank'><img src={github}></img></a></Div>
      </div>
    );
  }
}

export default App;
