"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">03 — Projects</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            A selection of projects spanning web, mobile, data, and computer vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-surface/30 backdrop-blur hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-surface-strong">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-mono rounded bg-background/80 backdrop-blur text-accent border border-accent/30">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-accent uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-background border border-border text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-md text-text-secondary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface-strong"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur text-text-secondary hover:text-accent"
                aria-label="Close"
              >
                <FaTimes size={18} />
              </button>

              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="text-xs text-accent uppercase tracking-wider mb-2">{selected.category}</div>
                <h3 className="text-3xl font-bold text-text mb-4">{selected.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{selected.description}</p>

                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-text-secondary mb-3">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-md bg-background border border-border text-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-medium hover:shadow-lg hover:shadow-accent/50 transition-shadow"
                  >
                    <FaExternalLinkAlt size={14} />
                    View Demo
                  </a>
                  <a
                    href={`https://github.com/Justindwinata`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-text hover:border-accent transition-colors"
                  >
                    <FaGithub size={14} />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
