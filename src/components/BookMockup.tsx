import { motion } from "motion/react";
import illus from "@/assets/book-illustration.jpg";

const chapters = [
  { n: "I", title: "Söhbət" },
  { n: "II", title: "Zamanın səsi" },
  { n: "III", title: "Soy ağacı", active: true },
  { n: "IV", title: "Hər şeyin başlanğıcı" },
  { n: "V", title: "Nəticə" },
];

export function BookMockup() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative grid grid-cols-2 rounded-2xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(60,40,20,0.45)] ring-1 ring-cream"
      >
        {/* Left page — cover/chapters */}
        <div className="relative bg-beige p-8 md:p-10 aspect-[3/4]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brown">Leyla Məmmədova</div>
          <h3 className="serif text-3xl md:text-4xl leading-tight mt-4">
            Bir ömrün <em className="text-brown">xatirələri</em>
          </h3>
          <div className="mt-8 h-px bg-brown/30" />
          <ul className="mt-6 space-y-3">
            {chapters.map((c) => (
              <li
                key={c.n}
                className={`flex items-baseline gap-4 text-sm ${
                  c.active ? "text-brown" : "text-foreground/70"
                }`}
              >
                <span className="serif italic w-6">{c.n}</span>
                <span className="serif text-base">{c.title}</span>
                <span className="flex-1 border-b border-dotted border-foreground/20" />
                <span className="text-[10px] tracking-widest">{12 + chapters.indexOf(c) * 14}</span>
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute inset-0 bg-grain" />
        </div>
        {/* Right page — illustration */}
        <div className="relative bg-paper p-6 aspect-[3/4]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brown text-right">Fəsil III</div>
          <div className="mt-3 rounded-md overflow-hidden">
            <img src={illus} alt="" className="w-full h-44 md:h-56 object-cover sepia-[0.15]" loading="lazy" />
          </div>
          <p className="serif italic text-sm md:text-base mt-4 leading-relaxed text-foreground/80">
            "Anam həmişə deyirdi ki, evdə tut ağacı varsa, ruh da var. O ağac hələ də durur..."
          </p>
          <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-foreground/50 text-right">— səh. 42</div>
          <div className="pointer-events-none absolute inset-0 bg-grain" />
        </div>
        {/* Center binding shadow */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/20 via-black/10 to-black/20" />
      </motion.div>

      {/* Floating processing card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-8 -right-4 md:-right-12 w-72 bg-background/90 backdrop-blur-md border border-cream rounded-2xl shadow-xl p-6"
      >
        <div className="text-[10px] uppercase tracking-[0.3em] text-brown mb-3">Hazırlanır</div>
        <ul className="space-y-2.5 text-sm">
          <Step label="Xatirələr transcribe olunur" done />
          <Step label="Chapter-lar yaradılır" done />
          <Step label="Illustrasiyalar hazırlanır" done />
          <Step label="Memoir kitabı formalaşdırılır" />
        </ul>
      </motion.div>
    </div>
  );
}

function Step({ label, done }: { label: string; done?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
          done ? "bg-brown text-background" : "border border-brown/40 text-brown animate-[slow-pulse_2.6s_ease-in-out_infinite]"
        }`}
      >
        {done ? "✓" : ""}
      </span>
      <span className={done ? "text-foreground/70" : "text-foreground animate-[slow-pulse_2.6s_ease-in-out_infinite]"}>
        {label}{done ? "" : "..."}
      </span>
    </li>
  );
}
