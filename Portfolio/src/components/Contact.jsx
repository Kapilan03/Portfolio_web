import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
import './Contact.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      e.target.reset();
    }, 2500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content reveal">
          <div className="contact-info">
            <h3>Reach Out</h3>
            <p>
              I'm always open to discussing new projects, internship opportunities,
              or collaborations. Feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:Kapilan2k06@gmail.com" className="contact-link-item">
                <div className="contact-link-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-link-text">
                  <div className="label">Email</div>
                  <div className="value">Kapilan2k06@gmail.com</div>
                </div>
              </a>
              <a href="tel:+918838639769" className="contact-link-item">
                <div className="contact-link-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-link-text">
                  <div className="label">Phone</div>
                  <div className="value">+91 88386 39769</div>
                </div>
              </a>
              <a href="https://github.com/kapilan03" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon">
                  <GithubIcon size={18} />
                </div>
                <div className="contact-link-text">
                  <div className="label">GitHub</div>
                  <div className="value">kapilan03</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/kapilan-v" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon">
                  <LinkedinIcon size={18} />
                </div>
                <div className="contact-link-text">
                  <div className="label">LinkedIn</div>
                  <div className="value">Kapilan V</div>
                </div>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSent}>
              {isSent ? (
                <span style={{ color: '#000' }}>Message Sent! ✓</span>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
