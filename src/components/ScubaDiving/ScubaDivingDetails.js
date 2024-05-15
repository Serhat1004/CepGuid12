import React from 'react';
import './ScubaDivingDetails.css'; // Make sure to create and style this CSS file accordingly
import { Link } from 'react-router-dom';


const ScubaDivingDetails = () => {
  return (
    <div className="scuba-diving-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Antalya Scuba Diving</h1>
      <img src="/assets/Scuba.jpg" alt="Scuba Diving" />
      <p>
        Dive into the clear waters of the Mediterranean and explore vibrant marine life and historic wrecks around Antalya. Our scuba diving tours cater to all levels, from beginners to experienced divers, providing professional guidance and top-notch equipment. Experience the underwater beauty of Antalya’s coastal waters in this thrilling adventure.
      </p>
    </div>
  );
}

export default ScubaDivingDetails;
