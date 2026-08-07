"use client";

import { config } from "@/lib/config";
import "@/styles/projects.css";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const displayed = expanded ? config.projects : config.projects.slice(0, 6);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
          <span className="header-accent">My Work</span>
        </div>
        <div className="projects-grid">
          {displayed.map((project, idx) => (
            <div key={project.id} className="project-card">
              <div className="project-number">{String(idx + 1).padStart(2, '0')}</div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">{project.technologies}</p>
              </div>
            </div>
          ))}
        </div>
        {config.projects.length > 6 && (
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
