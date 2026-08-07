"use client";

import { config } from "@/lib/config";

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget.getAttribute("href");
    if (target?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          JD
        </a>
        <div className="navbar-menu">
          <ul className="nav-list">
            <li>
              <a href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li>
              <a href="#career" onClick={handleNavClick}>
                Career
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleNavClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#achievements" onClick={handleNavClick}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
          <a href={config.contact.resume} target="_blank" rel="noopener noreferrer" className="nav-resume">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
