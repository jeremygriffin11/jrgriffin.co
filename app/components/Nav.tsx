"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={scrolled ? "scrolled" : ""} id="nav">
      <div className="nav-inner">
        <a
          href="#top"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, "#top")}
        >
          Jeremy Griffin
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${mobileOpen ? " open" : ""}`}>
          <li>
            <a
              href="#approach"
              onClick={(e) => handleNavClick(e, "#approach")}
            >
              Approach
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              onClick={(e) => handleNavClick(e, "#solutions")}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#audience"
              onClick={(e) => handleNavClick(e, "#audience")}
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Let&apos;s Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
