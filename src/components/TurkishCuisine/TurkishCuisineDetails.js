import React from 'react';
import './TurkishCuisineDetails.css'; 
import { Link } from 'react-router-dom';

const TurkishCuisineDetails = () => {
  return (
    <div className="turkish-cuisine-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Turkish Cuisine Experience</h1>
      <img src="/assets/türk.jpg" alt="Turkish Cuisine" />
      <p>
        Savor the flavors of traditional Turkish cuisine with our culinary tours that explore local markets and include cooking classes with master chefs. This immersive experience will guide you through the rich tastes and aromas of Turkish dishes, such as kebabs, meze, and sweets, allowing you to learn and enjoy the culinary traditions of Turkey firsthand.
      </p>
    </div>
  );
}

export default TurkishCuisineDetails;
