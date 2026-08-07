"use client";

import { config } from "@/lib/config";
import "@/styles/skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <span className="header-accent">What I Use</span>
        </div>
        <div className="skills-grid">
          {config.skillGroups.map((group, idx) => (
            <div key={idx} className="skill-card">
              <h3 className="skill-title">{group.title}</h3>
              <p className="skill-summary">{group.summary}</p>
              <div className="skill-tools">
                {group.tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
