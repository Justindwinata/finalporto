"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">02 — Experience</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Journey so <span className="gradient-text">far</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary-500 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`relative mb-12 pl-12 sm:pl-0 ${idx % 2 === 0 ? "sm:pr-[calc(50%+2rem)]" : "sm:pl-[calc(50%+2rem)]"}`}
            >
              {/* Dot */}
              <div className="absolute left-0 sm:left-1/2 top-2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
                <div className="absolute w-6 h-6 rounded-full bg-accent/20 animate-ping" />
              </div>

              <div className="group p-6 sm:p-8 rounded-2xl border border-border bg-surface/30 backdrop-blur hover:border-accent/50 hover:bg-surface/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-accent font-mono px-2 py-1 border border-accent/30 rounded">
                    {exp.type === "education" ? "Education" : "Project"}
                  </span>
                  <span className="text-xs text-text-secondary">{exp.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">{exp.title}</h3>
                <div className="text-accent text-sm font-medium mb-3">
                  {exp.org} · <span className="text-text-secondary">{exp.location}</span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-background border border-border text-text-secondary"
                    >
                      {tech}
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
