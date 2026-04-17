"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "3+",   label: "Anos de Exp." },
  { value: "50+",  label: "Projetos" },
  { value: "100%", label: "Dedicação" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12}  gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]"   className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80}  rotate={-8}  gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60}  rotate={20}  gradient="from-amber-500/[0.15]"  className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40}  rotate={-25} gradient="from-cyan-500/[0.15]"   className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-28 pb-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-emerald-500/80" />
            <span className="text-sm text-white/60 tracking-wide font-mono">
              Disponível para projetos
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="font-bold tracking-tight mb-6 md:mb-8" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", lineHeight: 1.05 }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Guilherme
              </span>
              <br />
              <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300")}>
                Full Stack Dev
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
              Transformo ideias em{" "}
              <span className="text-white/70">experiências digitais</span>{" "}
              que geram resultados reais.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-mono text-sm font-medium uppercase tracking-wider bg-white text-black hover:bg-white/90 transition-colors"
            >
              Falar Comigo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-mono text-sm font-medium uppercase tracking-wider border border-white/[0.15] text-white/70 hover:border-white/30 hover:text-white transition-colors"
            >
              Ver Serviços
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-12"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                  {s.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest mt-1 text-white/30">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-white/20">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
