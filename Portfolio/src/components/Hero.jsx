import React, { useEffect, useState, useRef } from 'react';
import { Send, FolderOpen, Mail, FileText } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cube Drag Rotation State
  const [rotation, setRotation] = useState({ x: -20, y: 45 });
  const isDraggingRef = useRef(false);
  const prevPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (!isDraggingRef.current) {
        setRotation(prev => ({
          x: prev.x, 
          y: prev.y + 0.4 // auto rotation speed
        }));
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    prevPos.current = { x: e.clientX, y: e.clientY };
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - prevPos.current.x;
    const deltaY = e.clientY - prevPos.current.y;
    
    setRotation(prev => ({
      x: prev.x - deltaY * 0.8,
      y: prev.y + deltaX * 0.8
    }));
    
    prevPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    e.target.releasePointerCapture(e.pointerId);
  };
  
  const roles = [
    'Computer Science Student',
    'Full-Stack Developer',
    'Federated Learning Enthusiast',
    'Edge Computing Researcher',
    'Competitive Programmer'
  ];

  useEffect(() => {
    let typingSpeed = isDeleting ? 40 : 80;
    
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        typingSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typingSpeed = 400;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">// Hello, world! I'm</p>
            <h1 className="hero-name">
              <span className="gradient-text">Kapilan V</span>
            </h1>
            <p className="hero-role">
              <span>{text}</span>
              <span className="typing-cursor"></span>
            </p>
            <p className="hero-description">
              Third-year Computer Science student with a passion for building federated learning systems,
              low-power edge computing solutions, and full-stack web applications.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <Send size={16} /> Get in Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                <FolderOpen size={16} /> View Projects
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FileText size={16} /> Resume
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/kapilan03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com/in/kapilan-v" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:Kapilan2k06@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div 
              className="cube-scene"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div 
                className="prism"
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
              >
                <div className="prism-face front"></div>
                <div className="prism-face right-front"></div>
                <div className="prism-face right-back"></div>
                <div className="prism-face back"></div>
                <div className="prism-face left-back"></div>
                <div className="prism-face left-front"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
