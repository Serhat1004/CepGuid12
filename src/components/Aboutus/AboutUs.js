import React from 'react';
import './AboutUs.css'; 
const AboutUs = () => {
  const crewImages = [
    { id: 1, src: '/assets/Orhan.png'},
    { id: 2, src: '/assets/Ridvan.png'},
    { id: 3, src: '/assets/serhat.png' },
    
  ];

  return (
    <div className="about-us-container">
      <section className="intro-section">
        <h1>About Us</h1>
        <p>Since 2023, CepGuide has been pioneering innovative Excursion services.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p> CepGuide, aims to deliver safe, comfortable, and world-class excursions, unveiling hidden gems while promoting sustainable tourism.</p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>CepGuide strives to be a leader in the excursion industry by fostering cultural enrichment and using technology to broaden access to excursions.</p>
      </section>

      <section className="services-section">
    <h2>Our Services</h2>
    <ul className="no-bullets">
        <li>Cultural Tours: Explore Anatolia’s heritage.</li>
        <li>Adventure Tours: Join activities like Rafting in Beskonak.</li>
        <li>Transfers:Have the best and most efficient transport.</li>
    </ul>
    </section>

    <section className="why-us-section">
    <h2>Why Choose Us?</h2>
    <ul className="no-bullets">
        <li>Reliability:Ensuring consistent and dependable excursions.</li>
        <li>Services: Excursions tailored to explore Antalya's unique landscapes and cultural sites.</li>
        <li>Innovation: Utilizing technology to enhance the excursion experience in Antalya.</li>
    </ul>
    </section>

    <section className="crew-section">
      <h2>Meet Our Crew</h2>
      <div className="crew-images">
        {crewImages.map(image => (
          <div key={image.id} className="crew-member">
            <img src={image.src} alt={image.alt} className="crew-image" />
          </div>
        ))}
      </div>
    </section>

      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>Email us at <a href="mailto:info@CepGuide.com">info@CepGuide.com</a> or call +90 553 838 3058</p>
      </section>
    </div>
  );
}

export default AboutUs;
