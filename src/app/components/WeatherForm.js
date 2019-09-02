import React from 'react';


const WeatherForm = props => {
  return(
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="your city name"
                className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="your country name" className="form-control"/>
            </div>
            <button type="submit"  className="btn btn-success btn-lg btn-block">
                  get weather
            </button>
        </form>
    </div>
  );
}

export default WeatherForm;