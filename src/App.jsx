// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMeprecc from "./components/AboutMeprecc";
import AboutRds from "./components/AboutRds";
import Songs from "./components/Songs";
import Arts from "./components/Arts";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import BackgroundLines from "./components/BackgroundLines";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      {/* Animation toile */}
      <BackgroundLines />

      {/* Sections principales */}
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
