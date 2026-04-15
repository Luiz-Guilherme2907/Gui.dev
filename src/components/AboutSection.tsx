"use client";

import { useEffect, useRef } from "react";

const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "Supabase", "Tailwind CSS", "Prisma",
  "Docker", "Git & GitHub", "Figma", "REST / tRPC",
  "React Native", "Zod", "Vercel / AWS",
];

const REASONS = [
  { icon: "→", text: "Entrega rápida, sem enrolação" },
  { icon: "→", text: "Código limpo e bem estruturado" },
  { icon: "→", text: "Comunicação clara durante todo o projeto" },
  { icon: "→", text: "Design responsivo em qualquer tela" },
  { icon: "→", text: "Foco total no resultado do seu negócio" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="relative py-32">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-hover), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left — personal text ── */}
          <div>
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
                // sobre mim
              </p>
              <h2
                className="font-sans font-black tracking-tight leading-none mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--text)" }}
              >
                Quem sou eu
              </h2>
            </div>

            <div className="reveal space-y-4 text-base leading-relaxed" style={{ color: "var(--text-dim)", transitionDelay: "100ms" }}>
              <p>
                Sou <span style={{ color: "var(--text)" }}>Guilherme Modler</span>, desenvolvedor Full Stack
                apaixonado por criar produtos digitais que resolvem problemas reais. Trabalho tanto no
                lado visual quanto na infraestrutura — do design ao banco de dados.
              </p>
              <p>
                Meu foco é entregar projetos que não só ficam bonitos, mas que{" "}
                <span style={{ color: "var(--cyan)" }}>funcionam de verdade</span> e geram valor concreto
                para o negócio do cliente.
              </p>
            </div>

            {/* Por que trabalhar comigo */}
            <div className="mt-10 reveal" style={{ transitionDelay: "200ms" }}>
              <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)" }}>
                Por que me contratar?
              </p>
              <ul className="space-y-3">
                {REASONS.map((r) => (
                  <li key={r.text} className="flex items-start gap-3">
                    <span className="font-mono text-sm mt-0.5 shrink-0" style={{ color: "var(--cyan)" }}>
                      {r.icon}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-dim)" }}>{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right — skills ── */}
          <div>
            <div className="reveal" style={{ transitionDelay: "150ms" }}>
              <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
                Tecnologias que uso
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1.5 rounded-sm transition-all duration-200 cursor-default hover:border-cyan"
                    style={{
                      border:     "1px solid var(--border)",
                      color:      "var(--text-dim)",
                      background: "var(--bg-1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--cyan)";
                      e.currentTarget.style.color       = "var(--cyan)";
                      e.currentTarget.style.background  = "var(--cyan-dim)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color       = "var(--text-dim)";
                      e.currentTarget.style.background  = "var(--bg-1)";
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Terminal-style block */}
            <div
              className="mt-12 reveal rounded-lg p-5 font-mono text-sm"
              style={{
                border:     "1px solid var(--border)",
                background: "var(--bg-1)",
                transitionDelay: "300ms",
              }}
            >
              <p style={{ color: "var(--text-muted)" }}><span style={{ color: "var(--cyan)" }}>$</span> whoami</p>
              <p className="mt-1" style={{ color: "var(--text-dim)" }}>Guilherme Modler — Full Stack Developer</p>
              <p className="mt-3" style={{ color: "var(--text-muted)" }}><span style={{ color: "var(--cyan)" }}>$</span> location</p>
              <p className="mt-1" style={{ color: "var(--text-dim)" }}>Brasil 🇧🇷 — disponível para projetos remotos</p>
              <p className="mt-3" style={{ color: "var(--text-muted)" }}><span style={{ color: "var(--cyan)" }}>$</span> status</p>
              <p className="mt-1" style={{ color: "var(--green)" }}>Disponível para novos projetos ✓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
