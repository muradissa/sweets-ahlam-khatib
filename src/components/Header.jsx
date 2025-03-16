import React from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkedAlt } from "react-icons/fa";
import logo from "../assets/lognobackground.png";
import "./Header.css";

const Header = ({ selectedCategory, onBackButtonClick }) => {
  return (
    <header className={`header-container ${selectedCategory ? "expanded" : ""}`}>
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className={selectedCategory ? "logo show " : "logo"} />
      </div>

      {/* Social Media Icons (Hide when a category is selected) */}
      {!selectedCategory && (
        <div className="social-icons">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="social-icon whatsapp-icon" />
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="social-icon instagram-icon" />
          </a>
          {/* <a href="https://waze.com/your-location" target="_blank" rel="noopener noreferrer">
            <FaMapMarkedAlt size={30} className="social-icon waze-icon" />
          </a> */}
        </div>
      )}

      {/* Back Button (Only show when a category is selected) */}
      {selectedCategory && (
        <button className="back-button show" onClick={onBackButtonClick}>
          Go Back
        </button>
      )}
    </header>
  );
};

export default Header;
