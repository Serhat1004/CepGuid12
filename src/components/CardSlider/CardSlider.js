import React, { useState } from 'react';
import './CardSlider.css'; 

const CardSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 3) % images.length
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - 3 < 0 ? images.length - (3 - prevIndex % 3) : prevIndex - 3
        );
    };

    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
        visibleImages.push({
            src: images[(currentIndex + i) % images.length],
            position: i
        });
    }

    return (
        <div className="card-slider">
            <button onClick={prevCard} className="slide-button prev">&#10094;</button>
            {visibleImages.map((item, index) => (
                <div className={`card ${index === 0 || index === 2 ? 'transparent' : ''}`} key={index}>
                    <img src={item.src} alt={`Slide ${currentIndex + index}`} />
                </div>
            ))}
            <button onClick={nextCard} className="slide-button next">&#10095;</button>
        </div>
    );
};

export default CardSlider;

