"use client";

import { config } from "@/lib/config";
import "@/styles/skills.css";
import ScrollFade from "./ScrollFade";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <ScrollFade className="section-header" delay={0}>
          <h2>Skills & Tools</h2>
          <span className="header-accent">What I Use</span>
        </ScrollFade>
        <div className="skills-grid">
          {config.skillGroups.map((group, idx) => (
            <ScrollFade key={idx} delay={idx * 0.05}>
              <div className="skill-card">
                <h3 className="skill-title">{group.title}</h3>
                <p className="skill-summary">{group.summary}</p>
                <div className="skill-tools">
                  {group.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
