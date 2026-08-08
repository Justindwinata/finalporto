"use client";

import { motion } from "framer-motion";
import { profile, socialLinks, navLinks } from "@/lib/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  message: FaWhatsapp,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg">{profile.name.split(" ")[0]}.dev</a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted hover:text-fg transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors">
              <FaDownload size={14} /> Resume
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-bg pt-20 md:hidden"
        >
          <nav className="px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 px-4 py-3 border border-accent text-accent rounded-lg">
              <FaDownload size={16} /> Download Resume
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}