import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
      {images.map((image, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={image} alt="travel image" className="image" />
          )}
        </div>
      ))}
      <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;

