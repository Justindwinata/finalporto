"use client";

import { motion } from "framer-motion";
import { developer } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">01 — About</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Get to <span className="gradient-text">know me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/justin/justin-profile.webp"
                alt={developer.fullName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent/10 blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl bg-secondary-500/10 blur-2xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg sm:text-xl text-text leading-relaxed mb-6">{developer.about}</p>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              I work with React, TypeScript, Python, Java, Flutter, and modern frameworks to deliver
              production-grade prototypes and personal products that are functional and easy to explain.
            </p>

            <div className="flex flex-wrap gap-3">
              {developer.highlights.map((highlight, i) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm border border-border rounded-full bg-surface/50 text-text-secondary hover:text-accent hover:border-accent transition-colors cursor-default"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "20+" },
                { label: "Certificates", value: "10" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
