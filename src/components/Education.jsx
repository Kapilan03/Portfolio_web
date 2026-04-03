import React from 'react';
import './Education.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
  useScrollReveal();

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <div className="section-line"></div>
        </div>
        <div className="education-timeline">
          <div className="edu-item reveal">
            <span className="edu-date">2023 — 2027</span>
            <h3 className="edu-degree">B.Tech in Computer Science and Engineering</h3>
            <p className="edu-school">Amrita Vishwa Vidyapeetham</p>
            <p className="edu-location">Coimbatore, India</p>
          </div>
          <div className="edu-item reveal">
            <span className="edu-date">May 2023</span>
            <h3 className="edu-degree">CBSE Board — Class XII</h3>
            <p className="edu-school">Sri Chaitanya Techno School</p>
            <p className="edu-location">Coimbatore, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
