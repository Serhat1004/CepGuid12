import React from 'react';
import './CultureAndHistoryDetails.css'; // Ensure you create and style this CSS file accordingly
import { Link } from 'react-router-dom';

const CultureAndHistoryDetails = () => {
  return (
    <div className="culture-history-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Culture and History</h1>
      <img src="/assets/Aspendo.jpg" alt="Aspendos" />
      <p>
        Antalya, the gem of Turkey's Turquoise Coast, is steeped in a rich tapestry of history and culture 
        that spans thousands of years. Explore ancient ruins like those in Aspendos, one of the best-preserved 
        theatres from antiquity. Discover the diverse influences from the Greeks, Romans, and Ottomans that 
        have shaped this vibrant region. A visit to Antalya is a journey through the living history of 
        civilization itself, offering an unparalleled cultural experience.
      </p>
    </div>
  );
}

export default CultureAndHistoryDetails;


