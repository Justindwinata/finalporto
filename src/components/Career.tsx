"use client";

import { config } from "@/lib/config";
import "@/styles/career.css";

export default function Career() {
  return (
    <section className="career" id="career">
      <div className="career-container">
        <div className="section-header">
          <h2>Career</h2>
          <span className="header-accent">Learning Journey</span>
        </div>
        <div className="timeline">
          {config.experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
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
          ))}
        </div>
      </div>
    </section>
  );
}
