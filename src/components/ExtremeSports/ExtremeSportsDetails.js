import React from 'react';
import './ExtremeSportsDetails.css'; // Ensure you create and style this CSS file accordingly
import { Link } from 'react-router-dom';

const ExtremeSportsDetails = () => {
  return (
    <div className="extreme-sports-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Extreme Sports and Adrenaline</h1>
      <img src="/assets/Parag.jpg" alt="Extreme Sports" />
      <p>
        For thrill-seekers and adrenaline junkies, the world of extreme sports in Antalya offers an exhilarating escape. Engage in activities such as paragliding off the cliffs, bungee jumping, or kite surfing on the Turquoise Coast. Each activity is designed to pump your adrenaline and provide unforgettable high-octane experiences in breathtaking settings.
      </p>
    </div>
  );
}

export default ExtremeSportsDetails;
