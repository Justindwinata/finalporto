"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { developer, socials } from "@/lib/data";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: HiMail,
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #00d9ff 0%, transparent 50%)`,
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl"
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-surface/50 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-sm text-text-secondary">Available for internships</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{developer.shortName}</span>
            <br />
            <span className="text-text">{developer.fullName.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-4 max-w-2xl mx-auto"
          >
            {developer.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-text-secondary/80 mb-10 max-w-xl mx-auto"
          >
            {developer.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href={developer.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-medium hover:shadow-lg hover:shadow-accent/50 transition-shadow"
            >
              <FaDownload size={16} />
              Download CV
            </motion.a>
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text hover:border-accent transition-colors"
            >
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {socials.slice(0, 3).map((social) => {
              const Icon = socialIcons[social.platform as keyof typeof socialIcons];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-text-secondary hover:text-accent border border-border rounded-full hover:border-accent transition-all"
                  aria-label={social.platform}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-secondary/60"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <FaArrowDown size={12} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
