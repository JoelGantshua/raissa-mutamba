// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = () => {
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wd605oo", // Ton Service ID
        "template_dwsq5b9", // Ton Template ID
        e.target,
        "A0WpUEmDwyGkvkHhH" // Ta clé publique
      )
      .then(
        () => {
          setNotification({
            message: "Message envoyé avec succès !",
            type: "success",
          });
          e.target.reset();
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        },
        (err) => {
          setNotification({
            message: "Erreur lors de l'envoi. Réessayez.",
            type: "error",
          });
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-nous</h2>

      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="contact-container">
        {/* FORMULAIRE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Votre nom" required />
          <input
            type="email"
            name="from_email"
            placeholder="Votre email"
            required
          />
          <textarea name="message" placeholder="Votre message" required />
          <button type="submit">Envoyer</button>
        </form>

        {/* INFOS + MAP */}
        <div className="contact-info">
          <h3>Retrouvez-nous sur :</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/1D59q7aYUa/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/rmut.official?igsh=MWZmaDY3dTQ2ZDFpeg=="
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@rmut6?_t=ZM-8zoImUosmpy&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>

          <h3>Support & Offrandes :</h3>
          <a
            href="https://www.paypal.com/paypalme/RaissaMutamba"
            target="_blank"
            className="paypal-link"
          >
            PayPal
          </a>

          {/* GOOGLE MAPS */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d684.9499471906719!2d27.974518590653954!3d-26.09065686570357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574fc52b35587%3A0x7b22c2f07220ae2!2s29%20Hans%20Schoeman%20St%2C%20Malanshof%2C%20Randburg%2C%202194%2C%20Afrique%20du%20Sud!5e1!3m2!1sfr!2sma!4v1758809395497!5m2!1sfr!2sma"
              width="100%"
              height="250"
              style={{ border: "0", borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Raissa"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
