"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted">Featured work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-accent/50 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-2 py-1 text-xs font-mono bg-bg/80 backdrop-blur rounded">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-accent uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted line-clamp-2 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded bg-bg border border-border">{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="px-2 py-0.5 text-xs text-muted">+{project.tech.length - 3}</span>}
                </div>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                  View Demo <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}