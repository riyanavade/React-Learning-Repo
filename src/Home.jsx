import { Link, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <div className="home-layout">
      <h2>weather App</h2>
      <button onClick={() => navigate("/about")}>
        About
      </button>   
      <button onClick={() => navigate("/contact")}>
        Contact
      </button>
      <button onClick={() => navigate("/weather")}>
        weather
      </button>
      <hr/>
      <h3>Home Page</h3>
      <h1>Welcome to Weather App</h1>
      <p>Find weather information for your favorite cities.</p>

      <h3>Weather Pages</h3>
      <ul>
        <li>Currect weather</li>
        <li>Forecast</li>
        <li>City details</li>
      </ul>
    </div>
  );
}
export default Home;