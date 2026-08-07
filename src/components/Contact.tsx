"use client";

import { config } from "@/lib/config";
import "@/styles/contact.css";
import ScrollFade from "./ScrollFade";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <ScrollFade>
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">
              Open to internships, collaborations, or just a chat about technology.
            </p>
          </ScrollFade>
          <div className="contact-actions">
            <ScrollFade delay={0.1}>
              <a
                href={`mailto:${config.contact.email}`}
                className="contact-link"
              >
                <span className="link-icon">✉️</span>
                <span className="link-text">Email</span>
                <span className="link-value">{config.contact.email}</span>
              </a>
            </ScrollFade>
            <ScrollFade delay={0.15}>
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">💻</span>
                <span className="link-text">GitHub</span>
                <span className="link-value">View my code</span>
              </a>
            </ScrollFade>
            <ScrollFade delay={0.2}>
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">💼</span>
                <span className="link-text">LinkedIn</span>
                <span className="link-value">Let's connect</span>
              </a>
            </ScrollFade>
            <ScrollFade delay={0.25}>
              <a
                href={config.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">💬</span>
                <span className="link-text">WhatsApp</span>
                <span className="link-value">Start a chat</span>
              </a>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
}
