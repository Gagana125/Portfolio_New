import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Gagana Samarasekara. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/Gagana125" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-github" aria-hidden="true"></i>GitHub
        </a>
        <a href="https://www.linkedin.com/in/gagana-samarasekara/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
