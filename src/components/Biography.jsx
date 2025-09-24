import React, { useEffect } from "react";
import "../styles/biography.css";
import raissaPhoto from "../assets/images/11.JPG";

const Biography = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".biography-container, .biography-text h2");
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.transition = "all 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 * index);
    });
  }, []);

  return (
    <section id="biography" className="biography-section">
      <div className="biography-container">
        <div className="biography-image">
          <img src={raissaPhoto} alt="Raissa Mutamba" />
        </div>
        <div className="biography-text">
          <h2 className="biography-title">Biographie</h2>
          <p>
            Raissa Mutamba est prophétesse, conférencière, artiste, écrivaine, logisticienne, visionnaire de RIMM
            (Raissa Imani Mutamba Ministries) et Pasteur principal de Meprecc Johannesburg. Elle est également
            visionnaire de la plateforme en ligne RDS Africa, ainsi qu’initiatrice du mouvement GS8F (GodSafe),
            dédié à la transformation artistique des créatifs chrétiens, en les guidant vers une expression enracinée
            dans la foi et l’excellence.
          </p>
          <p>
            Alliant autorité prophétique et enseignements pertinents, elle est puissamment utilisée par Dieu pour
            éveiller les consciences, édifier l’Église et influencer la culture chrétienne au travers de ses multiples
            grâces.
          </p>
          <p>
            Son ministère est solidement enraciné dans le message qu’elle a intitulé ABIREC (Abolir l’Ignorance et
            Révéler Christ), qui résume sa mission : éclairer, équiper et établir l’Église afin de refléter l’authentique
            gloire de Dieu jusqu’à l’avènement de Jésus-Christ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
