import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Download, RotateCcw, BookOpen, Sparkles, CheckCircle2, FileText } from "lucide-react";
import { GrainOverlay, LightLeaks } from "@/components/GrainOverlay";
import illus from "@/assets/book-illustration.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero5 from "@/assets/hero-5.jpg";

export const Route = createFileRoute("/preview")({
  head: () => ({
    meta: [
      { title: "Memoir hazırdır — Nəfəs" },
      { name: "description", content: "Səs yazısından yaradılmış memoir kitabınız hazırdır." },
    ],
  }),
  component: PreviewPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const chapters = [
  { n: "I", title: "Uşaqlıq illəri", p: 6 },
  { n: "II", title: "Müharibə xatirələri", p: 18 },
  { n: "III", title: "Sevgi və ailə", p: 34 },
  { n: "IV", title: "Həyat dərsləri", p: 52 },
];

function PreviewPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <LightLeaks />
      <GrainOverlay />

      {/* Background visuals */}
      <img src={hero3} alt="" aria-hidden className="absolute -top-32 -right-32 w-[500px] opacity-20 blur-3xl pointer-events-none" />
      <img src={hero5} alt="" aria-hidden className="absolute bottom-0 -left-32 w-[460px] opacity-20 blur-3xl pointer-events-none" />

      <header className="relative pt-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="serif text-2xl tracking-tight">Nəfəs</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
              Xatirələr yaşadıqca yaşayır.
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/upload" className="hidden sm:inline-flex rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition">
              Yeni memoir
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-brown transition">
              <Download className="w-4 h-4" /> PDF yüklə
            </button>
          </div>
        </div>
      </header>

      <main className="relative px-6 md:px-10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          {/* Book preview */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: -8 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="relative"
            >
              {/* Cover */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto aspect-[3/4] max-w-md rounded-r-md rounded-l-sm overflow-hidden shadow-[0_50px_100px_-30px_rgba(60,40,20,0.55)] ring-1 ring-cream"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-beige via-cream to-beige" />
                <img src={illus} alt="" className="absolute inset-x-8 top-20 h-[55%] w-[calc(100%-4rem)] object-cover opacity-90 mix-blend-multiply rounded-md" loading="lazy" />
                <div className="absolute inset-0 p-10 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-brown">Memoir · 2026</div>
                  <div className="mt-auto">
                    <div className="h-px bg-brown/30 mb-5" />
                    <h2 className="serif text-3xl md:text-4xl leading-tight">
                      Leyla Məmmədovanın <em className="text-brown">hekayəsi</em>
                    </h2>
                    <p className="serif italic text-base text-foreground/70 mt-3">Bir ömrün xatirələri</p>
                    <div className="h-px bg-brown/30 mt-5" />
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mt-4">Nəfəs Press</div>
                  </div>
                </div>
                <div className="absolute left-0 inset-y-0 w-2 bg-gradient-to-r from-black/30 to-transparent" />
                <GrainOverlay />
              </motion.div>

              {/* Inner spread peeking below */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
                className="relative mx-auto max-w-md mt-8 grid grid-cols-2 rounded-md overflow-hidden shadow-xl ring-1 ring-cream"
              >
                <div className="relative bg-paper p-5 aspect-[3/4]">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-brown">Fəsil I</div>
                  <h3 className="serif text-xl mt-2">Uşaqlıq illəri</h3>
                  <p className="serif italic text-xs text-foreground/70 mt-3 leading-relaxed">
                    "Şuşa küçələrində qaçırdıq, qarın səsi hələ də qulağımdadır. Atam axşamlar bizə nağıl danışardı..."
                  </p>
                  <div className="mt-3 space-y-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-1 bg-foreground/10 rounded-full" style={{ width: `${70 + (i * 13) % 30}%` }} />
                    ))}
                  </div>
                  <GrainOverlay />
                </div>
                <div className="relative bg-beige p-3 aspect-[3/4]">
                  <img src={illus} alt="" className="w-full h-full object-cover rounded-sm sepia-[0.2]" loading="lazy" />
                  <p className="serif italic text-[10px] text-center text-foreground/60 mt-2">— Nənəm, 1952</p>
                  <GrainOverlay />
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-black/15 via-black/5 to-black/15" />
              </motion.div>
            </motion.div>

            {/* Floating status cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
              className="hidden md:flex absolute top-6 -left-6 items-center gap-2 bg-background/90 backdrop-blur-md border border-cream rounded-full px-4 py-2 text-xs shadow-lg"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-brown" /> Memoir export edildi
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
              className="hidden md:flex absolute top-1/2 -right-4 items-center gap-2 bg-background/90 backdrop-blur-md border border-cream rounded-full px-4 py-2 text-xs shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-brown" /> 14 illustrasiya yaradıldı
            </motion.div>
          </div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/60 border border-cream px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-brown">
              <CheckCircle2 className="w-3 h-3" /> Memoir hazırdır
            </div>
            <h1 className="serif mt-6 text-4xl md:text-6xl leading-[1.05]">
              Xatirələr artıq <em className="text-brown">unudulmayacaq.</em>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Səs yazısından yaradılmış memoir kitabınız artıq hazırdır. PDF olaraq yükləyə və gələcək nəsillər üçün qoruya bilərsiniz.
            </p>

            {/* Chapters */}
            <div className="mt-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brown">
                <span className="w-8 h-px bg-brown" /> Fəsillər
              </div>
              <ul className="mt-5 divide-y divide-cream border-y border-cream">
                {chapters.map((c) => (
                  <li key={c.n} className="flex items-baseline gap-4 py-4 group hover:text-brown transition-colors">
                    <span className="serif italic text-brown w-6">{c.n}</span>
                    <span className="serif text-lg md:text-xl">{c.title}</span>
                    <span className="flex-1 border-b border-dotted border-foreground/20" />
                    <span className="text-xs text-muted-foreground">səh. {c.p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
              className="relative mt-10 rounded-2xl bg-beige/60 border border-cream p-8 overflow-hidden"
            >
              <GrainOverlay />
              <p className="serif italic text-2xl md:text-3xl leading-[1.2] text-foreground/90 text-balance">
                "Mən düşünmürdüm ki, həyatım bir gün kitab olacaq."
              </p>
              <footer className="mt-4 text-[11px] uppercase tracking-[0.3em] text-brown">— Leyla, 82 yaş</footer>
            </motion.blockquote>

            {/* Download */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-brown transition-colors duration-500 shadow-lg shadow-brown/15">
                <Download className="w-4 h-4" /> PDF yüklə
              </button>
              <Link to="/upload" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition-colors">
                <RotateCcw className="w-3.5 h-3.5" /> Yenidən yarat
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><BookOpen className="w-3.5 h-3.5" /> 72 səhifə · 4 fəsil</span>
              <span className="inline-flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> PDF · 18 MB · çap üçün hazır</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
