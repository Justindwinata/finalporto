"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">04 — Skills</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Tech <span className="gradient-text">stack</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Tools and frameworks I use to build production-grade products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-border bg-surface/30 backdrop-blur hover:border-accent/50 hover:bg-surface/60 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                  {group.title}
                </h3>
                <span className="text-xs font-mono text-accent opacity-50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">{group.summary}</p>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs rounded-md bg-background border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
