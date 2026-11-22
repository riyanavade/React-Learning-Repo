import { Link, useNavigate } from "react-router-dom";
function Contact() {
     const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => navigate("/")}>
        Home
      </button>  
      <Link to="/">Back to Home page</Link>
    </div>
  );
}
export default Contact;