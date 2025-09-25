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
            RDS Africa est une plateforme en ligne initiée par Raissa Mutamba
            pour connecter et former les créatifs chrétiens. Elle offre des
            ressources pour la musique, les arts et la croissance spirituelle,
            visant à inspirer et guider les talents émergents.
          </p>
        </div>
        <div className="about-image">
          <img src={rdsImage} alt="RDS Africa" />
        </div>
      </section>
    </>
  );
};

export default AboutRds;
