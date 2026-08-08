"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted">My journey so far</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative mb-8 pl-12 sm:pl-0 ${idx % 2 === 0 ? "sm:pr-[calc(50%+2rem)] sm:text-right" : "sm:pl-[calc(50%+2rem)]"}`}
            >
              <div className="absolute left-0 sm:left-1/2 top-2 w-3 h-3 bg-accent rounded-full -translate-x-1/2" />

              <div className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {exp.type}
                  </span>
                  <span className="text-xs text-muted">{exp.period}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-accent mb-2">{exp.org}</p>
                <p className="text-sm text-muted mb-3">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded bg-bg border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
