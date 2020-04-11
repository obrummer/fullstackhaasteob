import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ country }) => {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`;
    axios.get(url).then(response => {
      setCurrentWeather(response.data);
    });
  }, []);

  console.log(currentWeather);
  return (
    <div>
      {currentWeather.length !== 0 ? (
        <>
          <h3>Weather in {country.capital}</h3>
          <p>Temperature: {currentWeather.current.temperature} celsius</p>
          <p>Wind speed: {currentWeather.current.wind_speed} m/s</p>
          <img
            src={currentWeather.current.weather_icons[0]}
            style={{ height: '70px' }}
            alt="icon"
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Weather;
