import { Link } from "react-router-dom";
import hammidaTechLogo from "../assets/hammidaTechLogo.png";
import "./Header.css";
const Header = ()=>{

    return(
        <>
        <div className="header">
            <div className="left-head">
                <img src={hammidaTechLogo} alt="hammidaTechLogo" />
            </div>
            <div className="right-head">
                <ul>
                    
                    <Link  to="/"><li>Home</li></Link>
                    <Link to="/service"><li>Service</li></Link>
                    <Link  to="/about"><li>Aboute</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Header