import PhotoCard from "../components/PhotoCard";
import React, { useEffect, useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const photoGroups = [
  [`${baseUrl}photos/photo1.jpg`, `${baseUrl}photos/photo2.jpg`, `${baseUrl}photos/photo3.jpg`],
  [`${baseUrl}photos/photo4.jpeg`, `${baseUrl}photos/photo2.jpg`, `${baseUrl}photos/photo3.jpg`],
  // add more groups as needed
];

function Home() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // start fading out
      setTimeout(() => {
        setCurrentGroupIndex((prev) => (prev + 1) % photoGroups.length);
        setIsVisible(true); // fade back in
      }, 600); // timing should match CSS fade duration
    }, 4000); // total interval time per group

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section 
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 27, 36, 0.55), rgba(31, 27, 36, 0.55)), url(${baseUrl}photos/salon-bg.jpeg)`,
        }}
      >
        <div className="hero-overlay">
          <h1>Welcome to My Hair Studio</h1>

          <div
            className={`home-photos slideshow ${
              isVisible ? "fade-in" : "fade-out"
            }`}
          >
            {photoGroups[currentGroupIndex]?.map((url, index) => (
              <PhotoCard
                key={index}
                className="home-photo-item"
                photo={{ url }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
