"use client";

import { config } from "@/lib/config";
import "@/styles/hero.css";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Data Science Enthusiast",
  "Computer Vision Explorer",
  "Mobile & Web Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="hero-greeting">Hello! I'm</span>
            <h1 className="hero-title">
              <span className="hero-title-line">{config.developer.fullName}</span>
            </h1>
            <p className={`hero-role ${fade ? "fade-in" : "fade-out"}`}>
              {roles[roleIndex]}
            </p>
          </div>
          <div className="hero-subtitle">
            <p className="hero-tagline">{config.developer.title}</p>
            <span className="hero-divider">•</span>
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
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
        <div className="hero-background">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
        </div>
      </div>
    </section>
  );
}
