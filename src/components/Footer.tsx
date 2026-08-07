"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { developer } from "@/lib/data";

const socials = [
  { platform: "GitHub", url: "https://github.com/Justindwinata", icon: FaGithub },
  { platform: "LinkedIn", url: "https://linkedin.com/in/justindwinata", icon: FaLinkedin },
  { platform: "Email", url: `mailto:${developer.email}`, icon: HiMail },
  { platform: "WhatsApp", url: "https://wa.me/6282280004235", icon: FaWhatsapp },
  { platform: "Instagram", url: "https://instagram.com/justindwnt", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          <div>
            <div className="text-xl font-bold mb-2">
              <span className="text-accent">J</span>
              <span>D</span>
              <span className="text-xs text-text-secondary font-mono ml-2">.dev</span>
            </div>
            <p className="text-sm text-text-secondary">
              Building digital products with intention.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 text-text-secondary hover:text-accent border border-border rounded-full hover:border-accent transition-all"
                  aria-label={social.platform}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>

          <div className="text-sm text-text-secondary md:text-right">
            © {new Date().getFullYear()} {developer.fullName}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
