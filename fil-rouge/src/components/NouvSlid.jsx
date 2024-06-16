import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "./Carrousel.css";
import { useState } from "react";

export function Slider() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        {
            id:1,
            image:'src/img/Daurade.jpg',
            text:"Dans quel quartier de Toulouse se trouve cette église ? Le mot-mystère contient sa deuxième lettre."
        },
        {
            id:2,
            image:'src/img/Toulouse_pairie_des_filtres.jpg',
            text:"Quel objet retrouve-t-on dans le nom de ce parc ? Il a permis de rendre potable l'eau de la Garonne. Garder pour le mot-mystère l’antépénultième lettre de ce mot au pluriel"
        },
        {
            id:3,
            image:'src/img/Toulouse-place-Capitole-Remi-Deligeon.jpeg',
            text:"Quel était le nombre de capitouls ? Un chiffre que l’on trouve sur la façade du Capitole qu'il convient de couper en deux parts égales et de l'appliquer à l'alphabet"
        },
        {
            id:4,
            image:'src/img/campus_ynov.jpg',
            text:"Quel est le nom de ce campus voisin du jardin Japonais ? Garder ce qu'il y a de grec dans son mot"
        },
        {
            id:5,
            image:'src/img/gare_matabiau.jpg',
            text:"La gare de Toulouse est très connue et très fréquentée. Comment s'appelle-t-elle ? Il convient de garder la première de ses lettres et la dernière de ses syllabes, si on peut en faire une lettre aussi"
        },
        {
            id:6,
            image:'src/img/st_etienne.jpg',
            text:"La très atypique cathédrale de Toulouse est dédiée à un saint dont le prénom est une variante de Stéphane. Le connais-tu ? En le prononçant, tu entendras la dernière lettre manquante à notre jeu de piste "
        }
    ];

    return (
        <Carousel className="defil"
            // autoPlay
            infiniteLoop
        >
            {images.map(slide => (
          <div key={slide.id} className="frame">
            <img src={slide.image} alt="" />
            <div className="overlay">
                <p>{slide.text}</p>
            </div>
          </div>
        ))}
        </Carousel>
    )
}