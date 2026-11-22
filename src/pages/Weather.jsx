import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeatherSearch from "../components/WeatherSearch";
import WeatherCard from "../components/WeatherCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";


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
<WeatherSearch
    city={city}
    onCityChange={handleChange}
    onSearch={handleSearch}
/>
            <div className="weather-info">
               {loading && <Loading />}

{error && <ErrorMessage message={error} />}

           {weather && !loading && !error && (
    <WeatherCard weather={weather} />
)}
          
            </div>
        </div>
    );
}

export default Weather;