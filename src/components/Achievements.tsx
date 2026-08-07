"use client";

import { config } from "@/lib/config";
import "@/styles/achievements.css";
import { useState } from "react";
import ScrollFade from "./ScrollFade";

export default function Achievements() {
  const [expanded, setExpanded] = useState(false);
  const displayed = expanded ? config.certificates : config.certificates.slice(0, 4);

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <ScrollFade className="section-header" delay={0}>
          <h2>Achievements</h2>
          <span className="header-accent">Certificates & Learning</span>
        </ScrollFade>
        <div className="certificates-grid">
          {displayed.map((cert, idx) => (
            <ScrollFade key={idx} delay={idx * 0.05}>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
              >
                <img
                  // eslint-disable-next-line @next/next/no-img-element
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="cert-image"
                />
                <div className="cert-overlay">
                  <span className="cert-view">View Certificate</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
              </a>
            </ScrollFade>
          ))}
        </div>
        {config.certificates.length > 4 && (
          <button
            className="load-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
}