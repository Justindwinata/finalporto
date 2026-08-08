"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted">A quick introduction</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <img
              src="/images/justin/justin-profile.webp"
              alt={profile.name}
              className="w-full h-full object-cover rounded-2xl border border-border"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6">{profile.bio}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Mercu Buana University",
                "Informatics Student",
                "Open to Internships",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm border border-border rounded-full bg-card"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "20+" },
                { label: "Certificates", value: "10" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 border border-border rounded-lg bg-card"
                >
                  <div className="text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
