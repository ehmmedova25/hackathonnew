import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { GrainOverlay, LightLeaks } from "@/components/GrainOverlay";
import hero2 from "@/assets/hero-2.jpg";
import hero5 from "@/assets/hero-5.jpg";
import illus from "@/assets/book-illustration.jpg";

export const Route = createFileRoute("/processing")({
  head: () => ({
    meta: [
      { title: "Hazırlanır — Nəfəs" },
      { name: "description", content: "Xatirələriniz kitab halına gətirilir." },
    ],
  }),
  component: ProcessingPage,
});

const STEPS = [
  "Xatirələr transcribe olunur",
  "Chapter-lar yaradılır",
  "Illustrasiyalar hazırlanır",
  "Memoir kitabı formalaşdırılır",
];

const EASE = [0.22, 1, 0.36, 1] as const;

function ProcessingPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (step >= STEPS.length) {
      const t = setTimeout(() => navigate({ to: "/preview" }), 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 2200);
    return () => clearTimeout(t);
  }, [step, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <LightLeaks />
      <GrainOverlay />

      {/* Blurred backdrop visuals */}
      <img src={hero2} alt="" aria-hidden className="absolute top-1/4 -left-32 w-[460px] opacity-25 blur-2xl rotate-[-8deg] pointer-events-none" />
      <img src={hero5} alt="" aria-hidden className="absolute bottom-0 -right-24 w-[420px] opacity-25 blur-2xl rotate-[6deg] pointer-events-none" />

      {/* Floating dust particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute w-1 h-1 rounded-full bg-brown/40"
          style={{ left: `${(i * 73) % 100}%`, top: `${(i * 41) % 100}%` }}
          animate={{ y: [-10, -40, -10], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <header className="relative pt-10 px-6 md:px-10">
        <Link to="/" className="flex flex-col leading-none w-fit mx-auto text-center">
          <span className="serif text-2xl tracking-tight">Nəfəs</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Xatirələr yaşadıqca yaşayır.
          </span>
        </Link>
      </header>

      <main className="relative flex flex-col items-center justify-center px-6 md:px-10 py-12 md:py-20">
        {/* Opening memoir book visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 30 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="relative w-full max-w-md aspect-[4/3] mb-12"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 grid grid-cols-2 rounded-2xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(60,40,20,0.45)] ring-1 ring-cream">
              <div className="relative bg-beige p-6">
                <div className="text-[9px] uppercase tracking-[0.3em] text-brown">Fəsil II</div>
                <p className="serif italic mt-4 text-sm text-foreground/70 leading-relaxed">
                  Zamanın səsi səhər çayı kimi yavaş axır, hər damla bir xatirə...
                </p>
                <GrainOverlay />
              </div>
              <div className="relative bg-paper">
                <img src={illus} alt="" className="w-full h-full object-cover sepia-[0.15]" loading="lazy" />
                <GrainOverlay />
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/20 via-black/10 to-black/20" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          className="text-center max-w-2xl"
        >
          <h1 className="serif text-3xl md:text-5xl leading-[1.1]">
            Xatirələriniz <em className="text-brown">kitab halına gətirilir...</em>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Süni intellekt səs yazısını analiz edir, chapter-lar yaradır və memoir kitabınızı formalaşdırır.
          </p>
        </motion.div>

        {/* Steps */}
        <ul className="mt-14 w-full max-w-md space-y-4">
          {STEPS.map((label, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: done || active ? 1 : 0.4, x: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="flex items-center gap-4"
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] transition-colors duration-700 ${
                    done
                      ? "bg-brown text-background"
                      : active
                        ? "border border-brown text-brown animate-[slow-pulse_2.6s_ease-in-out_infinite]"
                        : "border border-foreground/20 text-foreground/40"
                  }`}
                >
                  {done ? "✓" : ""}
                </span>
                <span
                  className={`serif text-lg md:text-xl tracking-tight ${
                    active ? "text-foreground animate-[slow-pulse_2.6s_ease-in-out_infinite]" : done ? "text-foreground/60" : "text-foreground/40"
                  }`}
                >
                  {label}
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >...</motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.li>
            );
          })}
        </ul>

        <p className="mt-14 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Bu proses adətən 1–2 dəqiqə çəkir
        </p>
      </main>
    </div>
  );
}
