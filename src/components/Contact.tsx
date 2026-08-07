"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { developer, socials } from "@/lib/data";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: HiMail,
  WhatsApp: FaWhatsapp,
  Instagram: FaInstagram,
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">06 — Contact</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Open to internships, collaborations, and conversations about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map((social, idx) => {
              const Icon = iconMap[social.platform as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur hover:border-accent/50 hover:bg-surface/60 transition-all"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="text-sm font-bold text-text mb-1">{social.platform}</div>
                  <div className="text-xs text-text-secondary">{social.label}</div>
                </motion.a>
              );
            })}

            <motion.a
              href={developer.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-accent bg-accent/10 backdrop-blur hover:bg-accent/20 transition-all"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-accent text-background">
                <FaDownload size={18} />
              </div>
              <div className="text-sm font-bold text-text mb-1">Resume</div>
              <div className="text-xs text-text-secondary">Download CV</div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 p-8 rounded-2xl border border-border bg-surface/30 backdrop-blur"
          >
            <p className="text-text-secondary mb-2">Prefer email?</p>
            <a
              href={`mailto:${developer.email}`}
              className="text-2xl sm:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              {developer.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
