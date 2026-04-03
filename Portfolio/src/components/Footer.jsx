import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">
            &copy; 2026 Kapilan V. Built with <span className="heart">♥</span> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
