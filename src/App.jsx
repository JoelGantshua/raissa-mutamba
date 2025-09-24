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
      <Navbar />
      <Hero />
      <Biography />
      <AboutMeprecc />
      <AboutRds />
      <Songs />
      <Arts />
      <Contact />
      <Footer />

      {/* Animation toile globale en arrière-plan */}
      <BackgroundLines className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
    </div>
  );
}

export default App;
