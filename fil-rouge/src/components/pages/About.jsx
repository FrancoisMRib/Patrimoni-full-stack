import { Header } from "../Header";
import { Footer } from "../Footer";
import { Return } from "../Return";
import './About.css';

export function Apropos() {
    return (
        <div>
            <Header/>
            <Return/>
            {/* <div id="HeaderBack" className="roseground">
                <img src="src/img/Logo_Patrimoni-removebg-preview 2.png" className='ptitLogo' />
            </div>
            <div className="buttonground">
                <Link to={"/"} className="return">Retour</Link>
            </div> */}
            <p>Que dire à propos de Patrimoni ?</p>
            <Footer/>
        </div>
    )
}