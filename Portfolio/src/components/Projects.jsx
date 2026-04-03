import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  useScrollReveal();

  const projects = [
    {
      title: "Smart Cafeteria Management System",
      icon: "🍽️",
      badge: "Completed",
      description: "Built a full-stack cafeteria platform with role-based access for students, staff, and admins — featuring menu management, real-time order tracking, and an integrated ML model for demand forecasting and menu recommendations, secured via JWT authentication.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "ML Model"],
      link: "https://github.com/kapilan03"
    },
    {
      title: "CLASP — Clustered LoRA Adapter Stacking",
      icon: "🔐",
      badge: "Ongoing",
      isOngoing: true,
      description: "Building an on-premise hierarchical federated LoRA system for stacking project-level and user-level adapters on DeepSeek-Coder-6.7B using FedProx, without exposing raw source code. Secured with DP-SGD (Opacus) and mTLS, with a versioned State Registry for rollback and a React dashboard for cluster performance tracking.",
      tech: ["DeepSeek-Coder", "HuggingFace PEFT", "Flower (FL)", "FedProx", "Opacus", "FastAPI", "React", "Docker"],
      link: "https://github.com/kapilan03"
    },
    {
      title: "LOPECS — Low-Power Edge Computing System",
      icon: "🚗",
      badge: "Completed",
      description: "Built a three-tier adaptive edge computing system (Device, Edge, Cloud) that dynamically offloads SLAM, object detection, and voice recognition tasks based on deadline and energy constraints. Implements QoE-driven task enrichment with EDF scheduling, HEFT/Dif-Min allocators, and a time-budget fallback mechanism to ensure no task is dropped.",
      tech: ["Python", "SimPy", "HEFT Scheduler", "EDF", "Sensor Fusion", "Edge Computing"],
      link: "https://github.com/kapilan03"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card reveal" key={idx}>
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <ExternalLink size={16} />
                </a>
              </div>
              <span className={`project-badge ${project.isOngoing ? 'ongoing' : ''}`}>
                {project.badge}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
