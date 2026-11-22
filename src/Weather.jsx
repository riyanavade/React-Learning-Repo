import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Weather() {
     const navigate = useNavigate();
    const [city, setCity] = useState("Dharwad");
    const [searchCity, setSearchCity] = useState("Dharwad");

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {

        const fetchWeather = async () => {

            setLoading(true);
            setError("");
            setWeather(null);

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) {
    const errorData = await response.json();

    throw new Error(
        `Error ${response.status}: ${errorData.message}`
    );
}

                const data = await response.json();

                setWeather(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();

    }, [searchCity]);

    function handleChange(event) {
        setCity(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();

        if (city.trim() === "") {
            setError("Please enter a city name");
            setWeather(null);
            return;
        }

        setSearchCity(city.trim());
    }

    return (
        <div className="weather-container">
            <h2 className="weather-title">Weather Search App</h2>
            <button onClick={() => navigate("/")}>
        Home
      </button>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleChange}
                />

                <button type="submit">
                    Search
                </button>
            </form>
            <div className="weather-info">
                {loading && <h3>Loading weather...</h3>}

            {error && <p>{error}</p>}

            {weather && !loading && !error && (
                <div>
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
            )}
            </div>
        </div>
    );
}

export default Weather;