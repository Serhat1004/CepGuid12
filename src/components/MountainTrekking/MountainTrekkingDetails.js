import React from 'react';
import './MountainTrekkingDetails.css'; 
import { Link } from 'react-router-dom';

const MountainTrekkingDetails = () => {
  return (
    <div className="mountain-trekking-details">
      <Link to="/"> &#8592; Back to Home</Link>
      <h1>Mountain Trekking</h1>
      <img src="/assets/Trekkingg.jpg" alt="Mountain Trekking" />
      <p>
        Explore the rugged terrains of the Taurus Mountains with our guided trekking tours, offering stunning vistas and a challenge for hikers of all levels. Experience the natural beauty and serene landscapes, from lush valleys to rocky peaks, providing a refreshing escape from the bustling city life.
      </p>
    </div>
  );
}

export default MountainTrekkingDetails;
