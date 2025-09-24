// src/components/BackgroundAnimation.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundAnimation = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent", // fond transparent
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // effet quand tu passes la souris
            onClick: { enable: true, mode: "push" },   // effet quand tu cliques
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: "#ffffff" }, // couleur des points
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "out" },
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundAnimation;
