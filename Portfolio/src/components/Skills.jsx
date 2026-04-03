import React from 'react';
import './Skills.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  useScrollReveal();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "⌨️",
      tags: ["Python", "Java", "C", "C++", "Haskell", "Go"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      tags: ["HTML5", "CSS3", "React.js", "Express.js", "Node.js", "REST API"]
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      tags: ["MongoDB", "SQL", "Firebase", "JWT Auth"]
    },
    {
      title: "Embedded & IoT",
      icon: "📡",
      tags: ["STM32", "Arduino", "ESP32", "UART", "Real-time Systems"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      tags: ["Git", "GitHub", "Docker", "VS Code", "Linux"]
    },
    {
      title: "CS Fundamentals",
      icon: "🧠",
      tags: ["DSA", "OOP", "OS", "DBMS", "Networks"]
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Tech Stack & Expertise</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skill-card reveal" key={idx}>
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-tags">
                {category.tags.map(tag => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
