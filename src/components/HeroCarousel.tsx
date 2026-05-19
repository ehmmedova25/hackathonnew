import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import h4 from "@/assets/hero-4.jpg";
import h5 from "@/assets/hero-5.jpg";

const slides = [
  { src: h1, caption: "Nənə Leyla, 82 yaş" },
  { src: h2, caption: "Bir ömrün səhifələri" },
  { src: h3, caption: "Köhnə şəkillər, yeni hekayələr" },
  { src: h4, caption: "Ata Rəşid, 76 yaş" },
  { src: h5, caption: "Qarabağ xatirələri" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-lg md:max-w-none mx-auto">
      <div aria-hidden className="absolute -inset-6 bg-cream/40 blur-3xl rounded-full" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] w-full max-h-[82vh] rounded-2xl overflow-hidden cinematic-vignette shadow-2xl shadow-brown/20"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={i}
            src={slides[i].src}
            alt={slides[i].caption}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 bg-background/40 backdrop-blur-sm rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-background">
            <span className="w-1.5 h-1.5 rounded-full bg-background" />
            {slides[i].caption}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grain" />
      </motion.div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-[3px] rounded-full transition-all duration-700 ${
              idx === i ? "w-8 bg-brown" : "w-3 bg-cream"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
