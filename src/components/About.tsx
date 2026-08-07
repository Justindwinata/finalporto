"use client";

import { config } from "@/lib/config";
import "@/styles/about.css";
import ScrollFade from "./ScrollFade";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <ScrollFade className="section-header" delay={0}>
          <h2>About Me</h2>
          <span className="header-accent">Who I am</span>
        </ScrollFade>
        <div className="about-layout">
          <ScrollFade className="about-photo-wrap" delay={0.1}>
            <img
              // eslint-disable-next-line @next/next/no-img-element
              src="/images/justin/justin-profile.webp"
              alt="Justin Dwinata"
              className="about-photo"
            />
            <div className="photo-frame"></div>
          </ScrollFade>
          <ScrollFade className="about-content" delay={0.2}>
            <div className="about-text">
              <p className="about-intro">
                Hi, I am Justin Dwinata, an Informatics student who enjoys turning
                technology ideas into usable digital products.
              </p>
              <p className="about-main">
                {config.about.description}
              </p>
              <div className="about-highlights">
                <span className="highlight-badge">Mercu Buana University</span>
                <span className="highlight-badge">Informatics Student</span>
                <span className="highlight-badge">Open to IT Internship</span>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}
