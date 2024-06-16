import { Header } from "../Header";
import { Footer } from "../Footer";
import { Return } from "../Return";
import { Register } from "../Register";
import { Link } from "react-router-dom";

export function Connexion() {
    return (
        <div>
            <Header/>
            <Return/>
            
            <div className="bandito">
                <p>Bienvenue sur l'espace de connexion !</p>
            </div>

            <div className="select">
                
                <button>
                    <Link to={`/registration`}>Créer ici pour créer un compte</Link>
                </button>
                <button>
                    <Link to={`/login`}>Créer ici pour vous connecter</Link>
                </button>
            </div>

            <div className="fondderriere">
                <img src="src/img/background.svg" alt="" className="fondecran"/>
            </div>

            <Footer/>
        </div>
    )
}