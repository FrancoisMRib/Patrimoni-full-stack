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
            
            <div className="banditoro">
                <p>Bienvenue sur l'espace de connexion !</p>
            </div>

            <div className="selectator">
                
                <button>
                    <Link to={`/register`}>Créer ici pour créer un compte</Link>
                </button>
                <button>
                    <Link to={`/loginpage`}>Créer ici pour vous connecter</Link>
                </button>
            </div>

            <div className="fonduderriere">
                <img src="src/img/background.svg" alt="" className="fondecran"/>
            </div>

            <Footer/>
        </div>
    )
}