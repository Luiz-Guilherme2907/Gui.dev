"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    n: "01", icon: "◈",
    title: "Landing Pages",
    desc: "Sites institucionais e landing pages que convertem visitantes em clientes com design que impressiona.",
    tags: ["Next.js", "React", "SEO"],
  },
  {
    n: "02", icon: "◇",
    title: "E-commerce",
    desc: "Lojas online com experiência de compra premium, integração de pagamentos e gestão de produtos.",
    tags: ["Custom", "Stripe", "CMS"],
  },
  {
    n: "03", icon: "⬡",
    title: "Sistemas Web",
    desc: "Dashboards, plataformas SaaS e sistemas internos sob medida para automatizar seu negócio.",
    tags: ["React", "Node.js", "SQL"],
  },
  {
    n: "04", icon: "◎",
    title: "Apps Mobile",
    desc: "Aplicações responsivas e PWAs que funcionam perfeitamente em qualquer dispositivo e plataforma.",
    tags: ["React Native", "PWA"],
  },
  {
    n: "05", icon: "⬙",
    title: "APIs & Backend",
    desc: "Integrações, microsserviços e arquiteturas escaláveis que sustentam sua aplicação com segurança.",
    tags: ["Node.js", "TypeScript", "REST"],
  },
  {
    n: "06", icon: "◬",
    title: "UI/UX Design",
    desc: "Interfaces elegantes e funcionais pensadas na experiência real do usuário do início ao fim.",
    tags: ["Figma", "Tailwind", "A11y"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Subtle top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-hover), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
            // o que eu faço
          </p>
          <h2
            className="font-sans font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--text)" }}
          >
            Serviços
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Do design ao deploy — entrego soluções completas, do pixel à infraestrutura.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className="neon-card reveal rounded-lg p-7 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative z-10">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                    {s.n}
                  </span>
                  <span className="text-2xl" style={{ color: "var(--cyan)", opacity: 0.7 }}>
                    {s.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-sm"
                      style={{
                        border:     "1px solid var(--border)",
                        color:      "var(--text-muted)",
                        background: "var(--bg-2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
