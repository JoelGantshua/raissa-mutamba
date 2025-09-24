import React from "react";
import "../styles/loader.css";
import Logo from "../assets/images/Log.jpeg"; // ✅ importer l’image

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={Logo} alt="Logo" className="loader-logo" /> {/* ✅ utiliser l’import */}
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <strong><p>AirMut...</p></strong>
    </div>
  );
};

export default Loader;
