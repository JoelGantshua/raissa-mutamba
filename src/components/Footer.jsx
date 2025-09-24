import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Raissa Mutamba. Tous droits réservés.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/share/1D59q7aYUa/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/rmut.official?igsh=MWZmaDY3dTQ2ZDFpeg==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com/@airmut21?si=ftToPrQ2C9Zyrp6y" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@rmut6?_t=ZM-8zoImUosmpy&_r=1" target="_blank" rel="noopener noreferrer">Tiktok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
