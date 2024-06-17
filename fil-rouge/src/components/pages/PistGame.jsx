import React, { useState } from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Slider } from "../NouvSlid";
import { Link } from "react-router-dom";
import { Return } from "../Return";
import './PistGame.css'

export function PistGame() {

    const [text, setText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleValidation = () => {
        const regex = /raymond/i;
        setIsCorrect(regex.test(text));
        setShowPopup(true); // Afficher le pop-up après la validation

        // Ci-dessous une version qui permet d'afficher la réponse au sein de la page sans utiliser de pop-up
        // setIsCorrect(text.toLowerCase().includes('raymond'));
        //En-dessous, la même mais sensible à la casse : à utiliser si on veut que ce soit "Raymond" uniquement et non "Raymond" et "raymond" qui marchent
        //setIsCorrect(text == 'Raymond');
    };


    const handleClosePopup = () => {
        setShowPopup(false); // Fermer le pop-up
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
            <h4>Poème indicatif :</h4>
            <h5>Ce mot est un prénom très prisé dans ce qui était jadis la plus importante famille toulousaine.</h5>
            <h5>Il a donné son nom à une ville en bordure de Toulouse qui rend également hommage à un saint et où en ce moment des cerveaux s'agitent</h5>
            <div className="response">
                <p>Cliquez ici pour donner la réponse du jeu de piste</p>
                <input type="text" placeholder="Entrez votre réponse ici" onChange={handleChange} />
                    {/* {text == "Raymond" ? <p>Vrai</p> : <p>Faux</p>} */}
                <button onClick={handleValidation} className="validateur">Valider</button>
                    {/* En-dessous la ligne correcte de la version avec affichage à l'intérieur de la page */}
                    {/* {isCorrect ? <p>Vrai</p> : <p>Faux</p>} */}
                    {showPopup && (
                        <div className="popup">
                            <p>Résultat : {isCorrect ? 'Vrai' : 'Faux'}</p>
                            <button onClick={handleClosePopup}>Fermer</button>
                        </div>
                    )}
            </div>

            <Footer/>
        </div>
    )
}