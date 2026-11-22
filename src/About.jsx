import { Link, useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate("/")}>
        Home
      </button>  
      <Link to="/">Back to Home page</Link>
    </div>
  );
}
export default About;