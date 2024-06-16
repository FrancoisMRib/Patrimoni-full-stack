import { Header } from "../Header";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";
import './Jeux.css';

export function Jeux() {
    return (
        <div>
            <Header/>
            <div id="HeaderLogo">
                <img src="src/img/Logo_Patrimoni-removebg-preview 2.png" alt='HeaderLogo' />
            </div>

            
                

            <div className="select">
                <div className="buttongen">
                    
                        <Link to={`/piste`} className="quizpist">Jeu de piste</Link>
                    
                </div>
                <div className="buttongen">
                    
                        <Link to={`/quiz`} className="quizpist">Quiz</Link>
                   
                </div>
            </div>
            
            <div className="fondderriere">
                <img src="src/img/background.svg" alt="" className="fondecran"/>
            </div>

            <Footer/>
        </div>
    )
}