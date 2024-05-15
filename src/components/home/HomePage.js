import React from "react";

import ImageSlider from "../ImageSlider/ImageSlider";
import CardSlider from "../CardSlider/CardSlider"; 
import Footer from "../Footer/Footer";
import Excursions from "../Excursions/Excursions";

const HomePage = () => {
    const images = [
        '/assets/foto1.jpg',
        '/assets/foto2.jpg',
        '/assets/Xanthos.jpg',
        '/assets/Kaput.jpg',
        '/assets/foto5.jpg',
        '/assets/side1.jpg',
        '/assets/oldtown.jpg'
    ];

    return (
        <section className="homepage-section">
            <div className="header1">
                <h1>Time To Experience</h1>
            </div>
            <ImageSlider images={images} />  
            <Excursions/>
            <CardSlider images={images} />  
            <Footer/>
        </section>
    );
};

export default HomePage;


