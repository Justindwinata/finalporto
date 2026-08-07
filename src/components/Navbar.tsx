"use client";

import { useEffect, useState } from "react";
import { config } from "@/lib/config";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget.getAttribute("href");
    if (target?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (reduceMotion) {
        element?.scrollIntoView({ block: "start" });
      } else {
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const sections = ["home", "about", "career", "projects", "achievements", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={handleNavClick} aria-label="Go to top">
            JD
          </a>
          <div className={`navbar-menu ${mobileOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                  onClick={handleNavClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className={activeSection === "career" ? "active" : ""}
                  onClick={handleNavClick}
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === "projects" ? "active" : ""}
                  onClick={handleNavClick}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className={activeSection === "achievements" ? "active" : ""}
                  onClick={handleNavClick}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === "contact" ? "active" : ""}
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href={config.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume
            </a>
          </div>
          <button
            className="hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={mobileOpen ? "bar open" : "bar"}></span>
            <span className={mobileOpen ? "bar open" : "bar"}></span>
            <span className={mobileOpen ? "bar open" : "bar"}></span>
          </button>
        </div>
      </nav>
      {mobileOpen && <div className="nav-overlay" onClick={() => setMobileOpen(false)}></div>}
    </>
  );
}