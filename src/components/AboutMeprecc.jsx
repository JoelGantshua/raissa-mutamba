import React from "react";
import "../styles/aboutMeprecc.css";
import mepreccImage from "../assets/images/meprec.webp";

const AboutMeprecc = () => {
  return (
    <section className="about-meprecc" id="about-meprecc">
      <div className="about-image">
        <img src={mepreccImage} alt="Meprecc" />
      </div>
      <div className="about-text">
        <h2>À propos de la Meprecc SA</h2>
        <p>
          La Meprecc SA est un ministère dynamique dédié à l'édification spirituelle,
          à la formation et à l'accompagnement des croyants. Dirigée par la prophétesse
          Raissa Mutamba, elle œuvre pour inspirer et transformer les vies à travers
          la foi, l'art et l'enseignement.
        </p>
        <p>
          Ses actions couvrent divers domaines : enseignements bibliques,
          projets artistiques, événements communautaires et initiatives sociales
          qui renforcent la mission spirituelle et culturelle.
        </p>
      </div>
    </section>
  );
};

export default AboutMeprecc;
