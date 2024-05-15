import React from 'react';
import './Excursions.css'; 
import { BrowserRouter as Router,Link } from 'react-router-dom';


const Excursions = () => {
 
  const excursions = [
    {
      id: 1,
      name: "Boat Tour",
      description: "Experience the majestic beauty of the Mediterranean Sea along the beautiful coast of Antalya",
      imageUrl: "/assets/BootsTour.jpg",
      links: [
        { path: "/boat-tour", label: "View Details" }
      ]
    },
    {
      id: 2,
      name: "Culture and History",
      description: "Discover Antalya, rich with  history and a cultural mosaic that tells the tales of ancient civilizations",
      imageUrl: "/assets/Aspendo.jpg",
      links: [
        { path: "/culture-history", label: "View Details" }
      ]
    },
    {
      id: 3,
      name: "Rafting and Jeep Tour",
      description: "Go on a dynamic adventure, where our rafting and jeep tours combine  an unforgettable journey",
      imageUrl: "/assets/Rafting.jpeg",
      links: [
        { path: "/rafting-jeep-tour", label: "View Details" }
      ]
    },
    {
      id: 4,
      name: "Beaches and Nature",
      description: "Beauty of Antalya's pristine beaches, where golden sands meet the water  of the Mediterranean",
      imageUrl: "/assets/foto1.jpg",
      links: [
        { path: "/beaches-nature", label: "View Details" }
      ]
    },
    {
      id: 5,
      name: "Scuba Diving",
      description: "Plunge into the crystal-clear waters of the Mediterranean to explore a unique underwater world",
      imageUrl: "/assets/scuba.jpg",
      links: [
        { path: "/scuba-diving", label: "View Details" }
      ]
    },
    {
      id: 6,
      name: "Extreme sports and adrenaline",
      description: "For those seeking a rush, dive into the world of extreme sports in Antalya",
      imageUrl: "/assets/Parag.jpg",
      links: [
        { path: "/extreme-sports", label: "View Details" }
      ]
    },
    {
      id: 7,
      name: "Mountain Trekking",
      description: "Trek through the majestic Taurus Mountains on our guided tours in Antalya",
      imageUrl: "/assets/Dag.jpg",
      links: [
        { path: "/mountain-trekking", label: "View Details" }
      ]
    },
    {
      id: 8,
      name: "Canyoning",
      description: "Prepare for an adventure, where our canyoning tours offer a rush of adrenaline",
      imageUrl: "/assets/kanyo.jpg",
      links: [
        { path: "/canyoning", label: "View Details" }
      ]
    },
    {
      id: 9,
      name: "Antalya's Oldtown",
      description: "Explore the ancient streets of Antalya's old city Kaleiçi, the historic heart of Antalya",
      imageUrl: "/assets/oldtown.jpg",
      links: [
        { path: "/kaleici-tour", label: "View Details" }
      ]
    },
    {
      id: 10,
      name: "Turkish Culinary Experience",
      description: "Delight in the rich flavors of traditional Turkish cuisine with our culinary tours",
      imageUrl: "/assets/türk.jpg",
      links: [
        { path: "/turkish-culinary", label: "View Details" }
      ]
    }
  ];

  return (
    <div className="excursions-container">
      {excursions.map((excursion) => (
        <div key={excursion.id} className="excursion-card">
          <img src={excursion.imageUrl} alt={excursion.name} className="excursion-image" />
          <div className="excursion-info">
            <h3>{excursion.name}</h3>
            <p>{excursion.description}</p>
            {excursion.links && excursion.links.map(link => (
              <Link key={link.path} to={link.path} className="excursion-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Excursions;
;

