"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { navItems, developer } from "@/lib/data";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: HiMail,
  WhatsApp: FaWhatsapp,
  Instagram: FaInstagram,
};

const socialLinks = [
  { platform: "GitHub", url: "https://github.com/Justindwinata" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/justindwinata" },
  { platform: "Email", url: `mailto:${developer.email}` },
  { platform: "WhatsApp", url: "https://wa.me/6282280004235" },
  { platform: "Instagram", url: "https://instagram.com/justindwnt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "experience", "projects", "skills", "certificates", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          <motion.a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <span className="text-accent">J</span>
            <span className="text-text">D</span>
            <span className="text-xs text-text-secondary font-mono hidden sm:inline">.dev</span>
          </motion.a>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`relative text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.slice(0, 3).map((social) => {
              const Icon = socialIcons[social.platform as keyof typeof socialIcons];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-text-secondary hover:text-accent transition-colors"
                  aria-label={social.platform}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
            <motion.a
              href={developer.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors"
            >
              Resume
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl pt-24"
          >
            <nav className="section-container flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleClick(item.id)}
                  className="text-left text-2xl font-semibold text-text hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-text-secondary hover:text-accent border border-border rounded-full"
                      aria-label={social.platform}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
              <a
                href={developer.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 text-center font-medium border border-accent text-accent rounded-full"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
