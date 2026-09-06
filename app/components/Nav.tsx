"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#execute", label: "How We Execute" },
  { href: "#audience", label: "Who It's For" },
  { href: "#principals", label: "Principals" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""} id="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => go(e, "#top")}>
          <span className="nav-mark">{"///"}</span>
          <span className="nav-word">Marine Street</span>
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${mobileOpen ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={(e) => go(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
