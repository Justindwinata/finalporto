"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">05 — Certificates</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Learning <span className="gradient-text">proof</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Documented achievements and continuous learning milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {certificates.map((cert, idx) => (
            <motion.a
              key={cert.id}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-surface/30 hover:border-accent/50 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-3 sm:p-4 text-center">
                <div className="text-xs font-mono text-accent mb-1">{String(idx + 1).padStart(2, "0")}</div>
                <div className="text-xs sm:text-sm font-medium text-text line-clamp-2">{cert.title}</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-background font-bold text-sm">View</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
