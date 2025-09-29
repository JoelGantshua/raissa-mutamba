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
        <p>Fondée le 19 avril 2013, la Meprecc SA est une Église dynamique, dédiée au réveil, à la formation et à l’accompagnement des croyants. 
          Sous la direction de la prophétesse Raïssa Mutamba, l’Église Meprecc SA œuvre à inspirer et transformer des vies à travers la foi, la puissance et l’excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutMeprecc;
