import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../styles/hero.css";

// Import des 3 images
import hero1 from "../assets/images/6.JPG";
import hero2 from "../assets/images/10.JPG";
import hero3 from "../assets/images/3.JPG";

const slides = [
  { id: 1, img: hero1 },
  { id: 2, img: hero2 },
  { id: 3, img: hero3 },
];

const Hero = () => {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 4000); // Changement toutes les 4 secondes
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.2 }
    );
  }, [currentIndex]);

  return (
    <section id="hero" className="hero-section">
      <img
        src={slides[currentIndex].img}
        alt="Raissa Mutamba"
        className="hero-image"
        ref={sliderRef}
      />
      <div className="hero-text">
        <h1>Raissa Mutamba</h1>
        <p>Prophétesse, conférencière et artiste</p>
      </div>
    </section>
  );
};

export default Hero;
