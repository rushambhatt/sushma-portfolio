import PhotoCard from "../components/PhotoCard";
import React, { useEffect, useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const homeImages = [
  `${baseUrl}photos/photo1.jpg`,
  `${baseUrl}photos/photo2.jpg`,
  `${baseUrl}photos/photo3.jpg`,
];

const portfolioImages = [
  `${baseUrl}photos/photo1.jpg`,
  `${baseUrl}photos/photo2.jpg`,
  `${baseUrl}photos/photo3.jpg`,
  `${baseUrl}photos/photo4.jpeg`,
  `${baseUrl}photos/photo10.JPG`,
  `${baseUrl}photos/IMG_0336.jpeg`,
  `${baseUrl}photos/IMG_1740.jpg`,
  `${baseUrl}photos/IMG_2014.jpg`,
  `${baseUrl}photos/IMG_7241.jpeg`,
  `${baseUrl}photos/IMG_9190.jpg`,
  `${baseUrl}photos/IMG_9255.jpg`,
  `${baseUrl}photos/IMG_9984.jpg`,
  `${baseUrl}photos/IMG_9985.jpg`,
  // add more as you have them
];

function Home() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <section className="hero-split">
        <div className="hero-text">
          <h1>Sushma's Hair and Beauty</h1>
          <p className="hero-subtext">
            Where expertise meets artistic brilliance. 
            Discover the art of hair and beauty with Sushma, 
            where every strand tells a story of elegance and style.
          </p>
        </div>

        <div className="hero-photos">
          {homeImages.map((url, index) => (
            <PhotoCard key={index} className="hero-photo-item" photo={{ url }} />
          ))}
        </div>
      </section>
      <button className="scroll-arrow" onClick={scrollToPortfolio}>
        <span>View Portfolio Images Below</span>
        <span className="arrow-icon">↓</span>
      </button>
      <section id="portfolio-section" className="portfolio-section">
        <h2 className="portfolio-heading">Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioImages.map((url, index) => (
            <PhotoCard key={index} className="portfolio-item" photo={{ url }} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;