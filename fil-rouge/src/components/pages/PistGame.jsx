import React, { useState } from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Slider } from "../NouvSlid";
import { Link } from "react-router-dom";
import { Return } from "../Return";
import './PistGame.css'

export function PistGame() {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <Header/>
            <Return/>
            <div className="band0">
                <h3>Jeu de piste</h3>
                <h4>Trouvez le mot-mystère en collectant différents indices disséminés partout dans Toulouse</h4>
            </div>
            
            <Slider/>
            <div className="response">
                <p>Cliquez ici pour donner la réponse du jeu de piste</p>
                <input type="text" placeholder="Entrez votre réponse ici" onChange={handleChange} />
                    {text == "Raymond" ? <p>Vrai</p> : <p>Faux</p>}
            </div>
            <button className="validateur">
                Valider
            </button>
            <Footer/>
        </div>
    )
}