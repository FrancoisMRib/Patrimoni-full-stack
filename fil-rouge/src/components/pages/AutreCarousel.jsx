import React, { useState } from 'react';
import './Carrousel.css'; // Importez le fichier CSS (optionnel)

const slides = [
  {
    image: 'img/Daurade.jpg',
    alt: 'Image 1',
    question: 'Dans quel quartier de Toulouse se trouve cette église ? Le mot-mystère contient sa deuxième lettre.',
  },
  {
    image: 'img/Toulouse_pairie_des_filtres.jpg',
    alt: 'Image 2',
    question:
      'Un système d’assainissement pour purifier l’eau boueuse puisée dans la Garonne aux alentours du cours Dillon et du château d’Eau a donné son nom à un parc toulousain très prisé. Quel est l’objet phare que l’on retrouve dans le nom de ce parc ? Garder pour le mot-mystère l’antépénultième lettre de cet objet',
  },
  {
    image: 'img/Toulouse-place-Capitole-Remi-Deligeon.jpeg',
    alt: 'Image 3',
    question:
      'Quel était le nombre de capitouls ? Un chiffre à retenir que l’on trouve sur la façade du Capitole qu\'il convient de couper en deux parts égales',
  },
];


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };
  
    const handlePrev = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="carousel">
        <ul className="slides">
          {slides.map((slide, index) => (
            <li key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.alt} />
              <p>{slide.question}</p>
            </li>
          ))}
        </ul>
        <button className="btn" id="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="btn" id="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    );
  };
  
  export default Carousel;