"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactAction } from "@/app/actions/contact";

const INITIAL = { success: false };

const BUDGETS = [
  "Menos de R$1.000",
  "R$1.000 – R$3.000",
  "R$3.000 – R$7.000",
  "R$7.000 – R$15.000",
  "Acima de R$15.000",
  "A definir / Conversar",
];

const inputStyle: React.CSSProperties = {
  width:      "100%",
  padding:    "12px 16px",
  background: "var(--bg-1)",
  border:     "1px solid var(--border)",
  borderRadius: "4px",
  color:      "var(--text)",
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize:   "14px",
  outline:    "none",
  transition: "border-color 0.2s ease",
};

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactAction, INITIAL);
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

  const focusIn  = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "var(--cyan)");
  const focusOut = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "var(--border)");

  return (
    <section id="contato" ref={ref} className="relative py-32">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-hover), transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left — header ── */}
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
              // contato
            </p>
            <h2
              className="font-sans font-black tracking-tight leading-none mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--text)" }}
            >
              Vamos criar<br />
              <span className="gradient-text">algo incrível?</span>
            </h2>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "var(--text-dim)" }}>
              Tem um projeto em mente? Me manda uma mensagem — respondo em até 24 horas.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-4">
              <a
                href="mailto:luizguilhermemodler2907@gmail.com"
                className="flex items-center gap-3 font-mono text-sm group"
                style={{ color: "var(--text-dim)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              >
                <span style={{ color: "var(--cyan)" }}>@</span>
                luizguilhermemodler2907@gmail.com
              </a>
            </div>
          </div>

          {/* ── Right — form ── */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            {state.success ? (
              <div
                className="rounded-lg p-10 text-center"
                style={{ border: "1px solid rgba(0,255,136,0.25)", background: "rgba(0,255,136,0.04)" }}
              >
                <div className="font-mono text-4xl mb-4" style={{ color: "var(--green)" }}>✓</div>
                <h3 className="font-sans font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
                  Mensagem enviada!
                </h3>
                <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                  Retorno em até 24 horas.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                    Nome
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                  {state.errors?.name && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "var(--magenta)" }}>
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                    E-mail
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                  {state.errors?.email && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "var(--magenta)" }}>
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                    Orçamento estimado
                  </label>
                  <select
                    name="budget"
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  >
                    <option value="">Selecionar...</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} style={{ background: "var(--bg-2)" }}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva seu projeto..."
                    required
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                  {state.errors?.message && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "var(--magenta)" }}>
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {state.message && !state.success && (
                  <p className="font-mono text-xs" style={{ color: "var(--magenta)" }}>
                    {state.message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-cyber w-full py-3.5 font-mono text-sm font-medium uppercase tracking-wider rounded-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "var(--cyan)", color: "var(--bg)", border: "none", cursor: isPending ? "wait" : "pointer" }}
                >
                  {isPending ? "Enviando..." : "Enviar Mensagem →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="mt-24 pt-8 text-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Guilherme Modler — Full Stack Developer
        </p>
      </div>
    </section>
  );
}
