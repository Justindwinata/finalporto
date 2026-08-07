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
              <div className="cert-card">
                <div className="cert-placeholder">
                  <span className="cert-icon">📜</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
              </div>
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
