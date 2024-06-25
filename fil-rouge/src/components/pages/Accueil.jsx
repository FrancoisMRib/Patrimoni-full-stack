import { Header } from "../Header";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";
import './Accueil.css';


export function Accueil() {
    return (
        <div>
            <Header/>
            <div id="HeaderLogo">
                <img src="src/img/Logo_Patrimoni-removebg-preview 2.png" alt='HeaderLogo' />
            </div>

            {/* <div className="band0">
            <h3>Choisissez l’itinéraire que vous souhaitez suivre et les monuments que vous souhaitez découvrir</h3>
            <h4>Les itinéraires famille sont à privilégier pour ceux cherchant à faire une excursion sympathique,
                     les itinéraires découverte pour ceux voulant se renseigner sur le sujet, 
                     et les itinéraires universitaires, enfin, ceux souhaitant se renseigner solidement sur un sujet.</h4>
            </div> */}

            <div className="bandito">
                <h3>Bienvenue sur le site de Patrimoni !!</h3>
                <h4>La premier site qui vous permettra de vous balader en visitant le patrimoine de la ville de </h4>
                <h3>TOULOUSE</h3>
            </div>

            <div className="select">
                <div className="buttongen"><Link to="/itineraire" className="vers">Cliquez ici si vous souhaitez avoir accès à un itinéraire programmé</Link></div>
                <div className="buttongen">Cliquez ici si vous souhaitez avoir accès à un itinéraire personnalisé</div>
            </div>
            
            <div className="fondderriere">
                <img src="src/img/background.svg" alt="" className="fondecran"/>
            </div>
            
            
            <Footer className="footerspeci"/>
        </div>
    )
}