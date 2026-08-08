"use client";

import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  message: FaWhatsapp,
};

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-lg">{profile.name.split(" ")[0]}.dev</p>
          <p className="text-sm text-muted">Building digital products with intention.</p>
        </div>

        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>

        <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}