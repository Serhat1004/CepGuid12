import React from 'react';
import './CanyoningDetails.css'; // Ensure you create and style this CSS file accordingly
import { Link } from 'react-router-dom';

const CanyoningDetails = () => {
  return (
    <div className="canyoning-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Canyoning</h1>
      <img src="/assets/kanyo.jpg" alt="Canyoning" />
      <p>
        Get ready for a thrilling adventure in Koprulu Canyon, where our canyoning tours provide an adrenaline-pumping experience through magnificent gorges. This activity combines hiking, climbing, and swimming, allowing participants to navigate through breathtaking landscapes and natural waterfalls. Ideal for adventure enthusiasts looking to challenge themselves in the rugged outdoors of Antalya.
      </p>
    </div>
  );
}

export default CanyoningDetails;
