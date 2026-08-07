"use client";

import { config } from "@/lib/config";
import "@/styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="hero-greeting">Hello! I'm</span>
            <h1 className="hero-title">
              {config.developer.fullName}
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="hero-tagline">{config.developer.title}</p>
            <p className="hero-location">{config.developer.location}</p>
          </div>
          <p className="hero-description">
            {config.developer.description}
          </p>
          <div className="hero-cta">
            <a 
              href={config.contact.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download CV
            </a>
            <a 
              href="#contact"
              className="btn btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-background">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
        </div>
      </div>
    </section>
  );
}
