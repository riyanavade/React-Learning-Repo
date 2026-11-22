
function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>Weather in {weather.name}</h2>

      <p>
        Temperature: {weather.main.temp} °C
      </p>

      <p>
        Description: {weather.weather[0].description}
      </p>

      <p>
        Humidity: {weather.main.humidity}%
      </p>

      <p>
        Wind Speed: {weather.wind.speed} m/s
      </p>
    </div>
  );
}

export default WeatherCard;
