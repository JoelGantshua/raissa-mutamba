import React from "react";
import "../styles/arts.css";

// On importe les images
import A5 from "../assets/images/A5.jpeg";
import A2 from "../assets/images/A2.jpeg";
import A3 from "../assets/images/A3.jpeg";
import A4 from "../assets/images/A4.jpeg";

const artsData = [
  { id: 5, title: "Citations", image: A5 },
  { id: 2, title: "Monumental", image: A2 },
  { id: 3, title: "Titres", image: A3 },
  { id: 4, title: "AirMut", image: A4 },
];

const Arts = () => {
  return (
    <section id="arts" className="arts-section">
      <h2>Tableaux et Arts</h2>
      <div className="arts-grid">
        {artsData.map((art) => (
          <div key={art.id} className="art-card">
            <img src={art.image} alt={art.title} />
            <div className="art-overlay">
              <h3>{art.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arts;
