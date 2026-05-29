import PhotoCard from "../components/PhotoCard";
import React, { useEffect, useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const photoGroups = [
  [`${baseUrl}photos/photo1.jpg`, `${baseUrl}photos/photo2.jpg`, `${baseUrl}photos/photo3.jpg`],
  [`${baseUrl}photos/IMG_6241.jpg`, `${baseUrl}photos/photo2.jpg`, `${baseUrl}photos/photo3.jpg`],
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
      <div className="hero">
        <h1>Welcome to Our Hair Studio</h1>
      </div>
      <div
        className={`home-photos slideshow ${
          isVisible ? "fade-in" : "fade-out"
        }`}
      >
        {photoGroups[currentGroupIndex]?.map((url, index) => (
          <PhotoCard key={index} className="home-photo-item" photo={{ url }} />
        ))}
      </div>
    </div>
  );
}

export default Home;
