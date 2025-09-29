import React from "react";
import "../styles/about.css"; // on sépare pour plus de clarté
import rdsImage from "../assets/images/rds.webp";

const AboutRds = () => {
  return (
    <>
      {/* Ligne de séparation entre Meprecc et RDS */}
      <div className="section-divider"></div>
      <section id="about-rds" className="about-rds">
  <div className="about-text">
    <h2>À propos du RDS</h2>
    <p>
      Existant depuis 2016, le RDS (Réseau Du Saint Esprit) est une
      infrastructure spirituelle conduite par l’Esprit, pensée pour servir,
      mobiliser et nourrir spirituellement les croyants à travers trois axes
      principaux d’expression :
    </p>
    <ol>
      <li>Formations et retraites en ligne</li>
      <li>Centre de prière en ligne</li>
      <li>Branche d’actions et d’outreach</li>
    </ol>
  </div>
  <div className="about-image">
    <img src={rdsImage} alt="RDS Africa" />
  </div>
</section>

    </>
  );
};

export default AboutRds;
