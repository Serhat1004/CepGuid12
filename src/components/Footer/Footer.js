import React from 'react';
import './Footer.css';  


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src="/assets/Logoo.png" alt="CepGuide" className="footer-logo" />
                    <p>CepGuide </p>
                </div>
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>CepGuide was founded in 2023 .....</p>
                    <a href="/AboutUs">More</a>
                </div>
                <div className="footer-section">
                    <h4>Cookie Policy</h4>
                    <a href="/cerez-politikasi">Details</a>
                </div>
                <div className="footer-section">
                    <h4>Payment methods</h4>
                    <p>
                      <img src="/assets/troyy.png" alt="Troy" style={{width: '50px', marginRight: '10px'}} />
                      <img src="/assets/visa.jpg" alt="Visa" style={{width: '50px', marginRight: '10px'}} />
                      <img src="/assets/mastercard.png" alt="MasterCard" style={{width: '50px', marginRight: '10px'}} />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
