import React, { useState, useEffect } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
import cv from '../assets/files/cv-new.pdf';
import cv2 from '../assets/files/CV.pdf';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">GAGANA</h1>
      <div
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        {['home', 'about', 'resume', 'projects', 'contact'].map((section) => (
          <li
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)} // Close menu on selection
          >
            <Link
              to={`/`}
              onClick={() => {
                document
                  .getElementById(section)
                  .scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <a href={cv2} download>
        <button className="cv-btn">Download CV</button>
      </a>
    </nav>
  );
};

export default Header;
