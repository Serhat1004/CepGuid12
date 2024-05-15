import React from 'react';

import './BoatTourDetails.css'; // Ensure this CSS path is correct
import { Link } from 'react-router-dom';


const BoatTourDetails = () => {
  return (
    <div className="boat-tour-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Boat Tour</h1>
      <img src="/assets/BootsTour.jpg" alt="Boat Tour" />
      <p>Experience breathtaking views of the Mediterranean Sea from the coast of Antalya with the Boat Tour. Enjoy a relaxing day on the water, soaking up the sun and exploring hidden coves along the shoreline. This tour offers a unique perspective of Antalya's stunning coastal landscape and provides opportunities for swimming, snorkeling, and photography.</p>
    </div>
  );
}

export default BoatTourDetails;


