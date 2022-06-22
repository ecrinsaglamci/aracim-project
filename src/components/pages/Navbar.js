import React, { useState } from "react";
import "../styled/Navbar.css";
import logo from '../../assets/logo.jpeg';
import { Section } from "./Section";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <div className="Navbar">
      <span className="nav-logo" >
        <img src={logo} alt='logo'></img>
          Aracim.com</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        
        <a href="/cars">İlanlar</a>
        <a href="/form">İlan Ekle</a>
        
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  
    </div>
  );
};

export default Navbar;