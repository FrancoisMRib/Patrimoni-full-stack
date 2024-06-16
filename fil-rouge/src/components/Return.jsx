import { Link } from "react-router-dom";
import './Return.css';

export function Return() {
    return(
        <div>
            <div id="HeaderBack" className="roseground">
                <img src="src/img/Logo_Patrimoni-removebg-preview 2.png" className='ptitLogo' />
            </div>
            <div className="buttonground">
                <Link to={"/"} className="return">Retour</Link>
            </div>
            <div className="reequilibre"></div>
        </div>
    )
}