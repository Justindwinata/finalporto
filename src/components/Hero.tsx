"use client";

import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  message: FaWhatsapp,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm border border-border rounded-full bg-card">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {profile.availability}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I&apos;m <span className="text-accent">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted mb-2"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted mb-8"
        >
          {profile.location}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto mb-10"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <FaDownload size={16} /> Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-lg hover:border-accent transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted text-sm"
          >
            <FaArrowDown size={14} className="mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
