import "./landing.styles.css"
import { Link } from "react-router-dom";


function Landing() {
    return (
      <Link to="/home">
      <button type="button">
           Ir al home page!
      </button>
    </Link>
    
    )}

export default Landing;