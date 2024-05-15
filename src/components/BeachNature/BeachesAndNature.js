import React from 'react';
import './BeachesAndNature.css'; 
import { Link } from 'react-router-dom';

const BeachesAndNature = () => {
  return (
    <div className="beaches-nature-details">
    <Link to="/"> &#8592; Back to Home</Link>
      <h1>Beaches and Nature</h1>
      <img src="/assets/Kaput.jpg" alt="Beaches and Nature" />
      <p>
        Antalya, a jewel on the Turkish Riviera, is renowned for its exquisite beaches, where the sun-kissed shores meet the sparkling blue waters of the Mediterranean. Explore the stunning landscapes and relax on the pristine sands or dive into the crystal-clear waters for snorkeling and swimming. This tour not only offers relaxation but also an opportunity to connect with nature in its most beautiful forms.
      </p>
    </div>
  );
}

export default BeachesAndNature;
