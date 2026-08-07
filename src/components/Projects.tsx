"use client";

import { config } from "@/lib/config";
import "@/styles/projects.css";
import { useState } from "react";
import ScrollFade from "./ScrollFade";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const displayed = expanded ? config.projects : config.projects.slice(0, 6);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <ScrollFade className="section-header" delay={0}>
          <h2>Projects</h2>
          <span className="header-accent">My Work</span>
        </ScrollFade>
        <div className="projects-grid">
          {displayed.map((project, idx) => (
            <ScrollFade key={project.id} delay={idx * 0.05}>
              <article className="project-card">
                <div className="project-media">
                  <img
                    // eslint-disable-next-line @next/next/no-img-element
                    src={`/assets/project-thumbnails/${project.slug}-landscape.webp`}
                    alt={project.title}
                    loading="lazy"
                    className="project-image"
                  />
                  <span className="project-category-pill">{project.category}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-number">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <p className="project-tech">{project.technologies}</p>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-link"
                  >
                    View Demo
                    <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            </ScrollFade>
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
