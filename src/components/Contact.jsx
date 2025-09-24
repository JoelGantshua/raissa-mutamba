// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = () => {
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_Omieq25",    // Ton Service ID
      "template_7uoki8s",   // Ton Template ID
      e.target,
      "p4dqyRMNBD9k9zjmz"  // Ta Clé publique
    )
    .then(
      () => {
        setNotification({ message: "Message envoyé avec succès !", type: "success" });
        e.target.reset(); // réinitialise le formulaire
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      },
      (err) => {
        setNotification({ message: "Erreur lors de l'envoi. Réessayez.", type: "error" });
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Votre nom" required />
          <input type="email" name="from_email" placeholder="Votre email" required />
          <textarea name="message" placeholder="Votre message" required />
          <button type="submit">Envoyer</button>
        </form>

        <div className="contact-info">
          <h3>Retrouvez-nous sur :</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/raissa" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/raissa" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@rmut6?_t=ZM-8zoImUosmpy&_r=1" target="_blank" rel="noreferrer">TikTok</a>
          </div>
          <h3>Support & Offrandes :</h3>
          <a href="https://www.paypal.com/paypalme/RaissaMutamba" target="_blank" className="paypal-link">PayPal</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
