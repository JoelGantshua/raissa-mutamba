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
import "./styles/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⏳ Simuler un temps de chargement (exemple : 2.5 secondes)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // 👉 Pendant le chargement, on ne montre QUE le loader
    return <Loader />;
  }

  // 👉 Une fois fini, on affiche le site complet
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Biography />
      <AboutMeprecc />
      <AboutRds />
      <Songs />
      <Arts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
