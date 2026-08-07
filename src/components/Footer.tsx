"use client";

import "@/styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Justin Dwinata. All rights reserved.
          </p>
          <p className="footer-text">
            Designed & built with attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
}
