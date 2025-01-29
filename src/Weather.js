import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Orlando",
    date: "Monday, 12.45",
    description: "Cloudy",
    precipitation: "3%",
    wind: "0 mph",
    humidity: "98%",
    temperature: "23",
  };

  return (
    <div className="Weather">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a City..."
            required
            className="search-input"
          />

          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>

      <h1 className>{weatherData.city}</h1>
      <p>
        <div className="current-temp">
          <span className="temp-icon">☁️</span>
          <span className="temp-number">{weatherData.temperature}</span>
          <span className="temp-unit">°C</span>
        </div>{" "}
      </p>

      <p>
        <div className="current-details">
          <span>{weatherData.date}</span>,
          <span className="weather-type">{weatherData.description}</span>
          <br />
          Precipitation: <strong>{weatherData.precipitation}</strong>, Wind:{" "}
          <strong>{weatherData.wind}</strong>, Humidity:
          <strong>{weatherData.humidity}</strong>
        </div>
        <br />
      </p>
    </div>
  );
}
