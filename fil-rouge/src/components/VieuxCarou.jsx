import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carrousel.css';

export function Carrousel() {
    return <Carousel>
        <div>
            <p style="text-align: center;">Trouvez le mot-mystère en collectant différents indices disséminés dans Toulouse !</p>
            <div className="carousel">
            
                <ul className="container">
            
                    <li className="slide">
                        <img src="./img/Daurade.jpg" alt="image.carousel" />
                    
                        <p alt="image.carousel">Dans quel quartier de Toulouse se trouve cette église ? Le mot-mystère contient sa deuxième lettre.</p>
                    </li>
                    <li className="slide active">
                        <img src="./img/Toulouse_pairie_des_filtres.jpg" alt="image.carousel" />
                    
                        <p alt="image.carousel">Un système d’assainissement pour purifier l’eau boueuse puisée dans la Garonne aux alentours du cours Dillon</p> 
                        <p>et du château d’Eau a donné son nom à un parc toulousain très prisé. Quel est l’objet phare que l’on retrouve </p> 
                        <p>dans le nom de ce parc ? Garder pour le mot-mystère l’antépénultième lettre de cet objet</p>
                    </li>
                    <li className="slide">
                        <img src="./img/Toulouse-place-Capitole-Remi-Deligeon.jpeg" alt="image.carousel" />
                    
                        <p alt="image.carousel">Quel était le nombre de capitouls ? Un chiffre à retenir que l’on trouve sur la façade du Capitole qu'il convient de couper en deux parts égales</p>
                    </li>
            
                </ul>
            <button className="btn" id="prev">&#10096</button>
            <button className="btn" id="next">&#10097</button>
            </div>
                <div style="background-color: #c17373;color: white;">Proposition 1</div>
    
                <div style="background-color: #c17373;color: white;">Proposition 2</div>
    
                <div style="background-color: #c17373;color: white;">Proposition 3</div>
    
        </div>
    </Carousel>;
}