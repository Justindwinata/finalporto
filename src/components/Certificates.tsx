"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-muted">Learning milestones</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {certificates.map((cert, idx) => (
            <motion.a
              key={cert.title}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card group"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs font-medium">{cert.title}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
