import React from 'react';
import './RaftingAndJeepTourDetails.css'; // Make sure to create and style this CSS file accordingly
import { Link } from 'react-router-dom';

const RaftingAndJeepTourDetails = () => {
  return (
    <div className="rafting-jeep-tour-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Rafting and Jeep Tour</h1>
      <img src="/assets/raft.jpg" alt="Rafting and Jeep Tour" />
      <p>
        Embark on an exhilarating adventure in Beşkonak, Manavgat with our combined rafting and jeep tour package. This tour offers the thrill of navigating the rapids of the Köprüçay River followed by a rugged jeep safari through the scenic Taurus Mountains. It's the perfect mix of adrenaline and natural beauty, providing a memorable experience for adventure seekers.
      </p>
    </div>
  );
}

export default RaftingAndJeepTourDetails;
