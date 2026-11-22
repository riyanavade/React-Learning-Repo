import { Link, useNavigate } from "react-router-dom";

function Weather() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Get Weather Information</h1>

      <button onClick={() => navigate("/")}>
        Home
      </button>

      <Link to="/">Back to Home page</Link>
    </div>
  );
}

export default Weather;