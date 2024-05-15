import React from 'react';
import './KaleiciTourDetails.css'; // Create and style this CSS file accordingly
import { Link } from 'react-router-dom';

const KaleiciTourDetails = () => {
  return (
    <div className="kaleici-tour-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Antalya’s Oldtown</h1>
      <img src="/assets/oldtown.jpg" alt="Kaleiçi" />
      <p>
        Discover the ancient streets of Kaleiçi, the historical heart of Antalya, where every step tells a story. This walking tour covers Roman architecture, Ottoman era houses, and the famous Hadrian's Gate. Stroll through narrow cobbled streets lined with boutique hotels, quaint shops, and historical sites, providing a picturesque glimpse into Antalya's past.
      </p>
    </div>
  );
}

export default KaleiciTourDetails;
