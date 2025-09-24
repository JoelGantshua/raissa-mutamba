import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Raissa Mutamba</div>
      <ul className="nav-links">
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about-meprecc">Meprecc</a></li>
        <li><a href="#about-rds">RDS</a></li>
        <li><a href="#songs">Chansons</a></li>
        <li><a href="#arts">Arts</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="https://www.paypal.com/paypalme/RaissaMutamba" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-support"
          >
            Support & Offrandes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
