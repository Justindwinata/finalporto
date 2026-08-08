"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted">Technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -2 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
            >
              <h3 className="font-bold mb-4">{skill.group}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm rounded-full bg-bg border border-border hover:border-accent hover:text-accent transition-colors"
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
