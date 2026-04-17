const STACK = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Prisma",
  "Docker", "Git", "Figma", "REST APIs",
  "React Native", "Java", "Springboot", "Angular", "Claude code", "Claude cowork", "I.A"
];

// Duplicate for seamless loop
const ITEMS = [...STACK, ...STACK];

export default function StackMarquee() {
  return (
    <section id="stack" className="relative py-20 overflow-hidden">
      {/* Separator lines */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-hover), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-hover), transparent)" }}
      />

      {/* Label */}
      <p
        className="text-center font-mono text-xs uppercase tracking-widest mb-8"
        style={{ color: "var(--text-muted)" }}
      >
        // stack tecnológico
      </p>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
        />

        {/* Scrolling row */}
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {ITEMS.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-4 shrink-0"
            >
              <span
                className="font-sans font-semibold text-sm"
                style={{ color: "var(--text-dim)" }}
              >
                {tech}
              </span>
              <span style={{ color: "var(--border-hover)", fontSize: "8px" }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
