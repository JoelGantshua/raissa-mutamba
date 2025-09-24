// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMeprecc from "./components/AboutMeprecc";
import AboutRds from "./components/AboutRds";
import Songs from "./components/Songs";
import Arts from "./components/Arts";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Loader from "./components/loader";
import BackgroundLines from "./components/BackgroundLines"; // 👉 on ajoute ton composant
import "./styles/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d’un petit délai avant d’afficher le site
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* 👇 Ici ton animation de lignes */}
          <BackgroundLines />

          <Navbar />
          <Hero />
          <Biography />
          <AboutMeprecc />
          <AboutRds />
          <Songs />
          <Arts />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
