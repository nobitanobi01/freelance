import React, { useState } from "react";
import "../style/Navbar.css";
import picture from "../assets/programmer.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // close menu when link clicked
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <img src={picture} alt="Profile" className="navbar-profile-pic" />
        <h2 className="navbar-title">Ajay Kumbhar</h2>
        <span className="navbar-subtitle">Software Developer</span>
      </div>

      {/* Right Section */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#experience" onClick={handleLinkClick}>
          Experience
        </a>
        <a href="#skills" onClick={handleLinkClick}>
          Skills
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          Projects
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Contact
        </a>
      </div>

      {/* Toggle Button */}
      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
