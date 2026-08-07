"use client";

import { config } from "@/lib/config";
import "@/styles/career.css";
import ScrollFade from "./ScrollFade";

export default function Career() {
  return (
    <section className="career" id="career">
      <div className="career-container">
        <ScrollFade className="section-header" delay={0}>
          <h2>Career</h2>
          <span className="header-accent">Learning Journey</span>
        </ScrollFade>
        <div className="timeline">
          {config.experiences.map((exp, idx) => (
            <ScrollFade key={idx} delay={idx * 0.1}>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="exp-position">{exp.position}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                  <div className="exp-tech">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
