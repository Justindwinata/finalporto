"use client";

import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  message: FaWhatsapp,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted">Let&apos;s connect</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {socialLinks.map((link, idx) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-muted">
                      {link.url.replace(/^mailto:|^https?:\/\/(www\.)?/, "")}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-xl border border-border bg-card"
          >
            <p className="text-muted mb-2">Prefer email?</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-2xl font-bold text-accent hover:underline"
            >
              {profile.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
