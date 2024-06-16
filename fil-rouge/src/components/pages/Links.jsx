import { Header } from "../Header";
import { Footer } from "../Footer";
import { Return } from "../Return";
import './Links.css';

export function Liens() {
    return (
        <div>
            <Header/>
            <Return/>
            <div>
                <h4>Voici les liens de nos partenaires !</h4>
            </div>
            
            <Footer/>
            
        </div>
    )
}