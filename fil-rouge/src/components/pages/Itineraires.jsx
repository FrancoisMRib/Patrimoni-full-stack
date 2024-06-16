import { Header } from "../Header";
import { Footer } from "../Footer";
// import { Link } from "react-router-dom";
import './Itineraires.css';
import { Return } from "../Return";

export function Itineraires() {
    return (
        <div>
            <Header/>
            <Return/>
            {/* <div id="HeaderBack">
                <img src="src/img/Logo_Patrimoni-removebg-preview 2.png" className='ptitLogo' />
            </div>
            <Link to={"/"} className="return">Retour</Link> */}

            {/* <div className="band0">
                <h3>Bienvenue sur le site de Patrimoni !!</h3>
                <h4>La premier site qui vous permettra de vous balader en visitant le patrimoine de la ville de </h4>
                <h3>TOULOUSE</h3>
            </div> */}

            <div>
            <div className="band0">
            
            <h3>Choisissez l’itinéraire que vous souhaitez suivre et les monuments que vous souhaitez découvrir</h3>
            <h4>Les itinéraires famille sont à privilégier pour ceux cherchant à faire une excursion sympathique,
                     les itinéraires découverte pour ceux voulant se renseigner sur le sujet, 
                     et les itinéraires universitaires, enfin, ceux souhaitant se renseigner solidement sur un sujet.</h4>
            </div>

            <div>

                <p className="bandeau">Itinéraires famille</p>
                <div className="ensemble">
                    <p className="selecteur">Toulouse à l'époque de romains</p>
                    <p className="selecteur">Toulouse et ses abords au Moyen-Âge</p>
                    <p className="selecteur">Toulouse depuis la Révolution</p>
                </div>
                <p className="bandeau">Itinéraires découverte</p>
                <div className="ensemble">
                    <p className="selecteur">La ville de Tolosa à l'époque antique</p>
                    <p className="selecteur">Toulouse du Moyen-Âge à la Révolution</p>
                    <p className="selecteur">Toulouse et la Seconde Guerre Mondiale</p>
                </div>
                <p className="bandeau">Itinéraires universitaires</p>
                <div className="ensemble">
                    <p className="selecteur">Lepatrimoine religieux toulousain</p>
                    <p className="selecteur">Toulouse capitale du royaume wisigoth</p>
                    <p className="selecteur">Les réseaux de Résistance toulousains</p>
                </div>
            </div>
            </div>

            <div className="fondufond">
            <img src="src/img/background.svg" alt="" />
            </div>

            <Footer/>
        </div>
    )
}