"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="back-to-top"
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}
