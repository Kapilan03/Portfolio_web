import React from 'react';
import './About.css';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content reveal">
          <p className="about-text">
            I'm a third-year <strong>Computer Science and Engineering</strong> student at
            <strong> Amrita Vishwa Vidyapeetham, Coimbatore</strong>, with a strong foundation in
            data structures, algorithms, and competitive programming. I'm experienced in building
            <strong> federated learning systems</strong>, <strong>low-power edge computing solutions</strong>,
            and full-stack web applications using modern frameworks. I'm actively seeking
            software engineering internships and full-time roles to apply and grow these skills.
          </p>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Languages</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3rd</div>
              <div className="stat-label">Year B.Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
