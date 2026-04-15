"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Stack",    href: "#stack" },
  { label: "Sobre",    href: "#sobre" },
  { label: "Contato",  href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? "rgba(2,2,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)"         : "none",
        borderBottom:   scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-sans font-black text-xl tracking-tight"
          style={{ color: "var(--text)" }}
        >
          G<span style={{ color: "var(--cyan)" }}>.</span>DEV
        </a>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:text-text"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contato"
          className="btn-cyber hidden md:inline-flex items-center gap-2 px-5 py-2 font-mono text-xs uppercase tracking-wider rounded-sm"
          style={{
            border:     "1px solid var(--cyan)",
            color:      "var(--cyan)",
            background: "transparent",
          }}
        >
          Falar Comigo
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </nav>
    </header>
  );
}
