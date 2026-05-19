import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Download,
  RotateCcw,
  BookOpen,
  Sparkles,
  CheckCircle2,
  FileText,
  Palette,
  Quote as QuoteIcon,
} from "lucide-react";
import { GrainOverlay, LightLeaks } from "@/components/GrainOverlay";
import illus from "@/assets/book-illustration.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

export const Route = createFileRoute("/preview")({
  head: () => ({
    meta: [
      { title: "Memoir hazırdır — Nəfəs" },
      {
        name: "description",
        content:
          "Səs yazısından yaradılmış memoir kitabınız hazırdır. PDF olaraq yükləyin və gələcək nəsillər üçün qoruyun.",
      },
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

      {/* Ambient background imagery — old photos, blurred */}
      <img
        src={hero1}
        alt=""
        aria-hidden
        className="absolute -top-40 -left-32 w-[520px] opacity-[0.18] blur-3xl pointer-events-none sepia-[0.4]"
      />
      <img
        src={hero3}
        alt=""
        aria-hidden
        className="absolute top-1/3 -right-40 w-[560px] opacity-[0.18] blur-3xl pointer-events-none sepia-[0.4]"
      />
      <img
        src={hero5}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-1/4 w-[480px] opacity-[0.14] blur-3xl pointer-events-none sepia-[0.4]"
      />

      {/* Minimal navbar */}
      <header className="relative pt-7 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="serif text-2xl tracking-tight">Nəfəs</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
              Xatirələr yaşadıqca yaşayır.
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/upload"
              className="hidden sm:inline-flex rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition"
            >
              Yeni memoir
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-brown transition">
              <Download className="w-4 h-4" /> PDF yüklə
            </button>
          </div>
        </div>
      </header>

      <main className="relative px-6 md:px-10 pt-10 md:pt-16 pb-24">
        {/* Editorial title strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-6 border-b border-cream pb-6"
        >
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-brown">
            <span className="w-10 h-px bg-brown" />
            Nəfəs Press · Nümunə №01 · 2026
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Tirajı: 1 · Şəxsi arxiv nüsxəsi
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-start mt-12 md:mt-16">
          {/* ──────── LEFT — Book preview ──────── */}
          <div className="relative">
            {/* Soft warm glow under the book */}
            <div
              aria-hidden
              className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_60%,rgba(200,150,90,0.22),transparent_70%)] blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1.8, ease: EASE }}
              className="relative [perspective:1800px]"
            >
              {/* Book cover */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto aspect-[3/4] max-w-md rounded-r-md rounded-l-sm overflow-hidden shadow-[0_60px_120px_-30px_rgba(60,40,20,0.6)] ring-1 ring-cream/80"
              >
                {/* Paper base */}
                <div className="absolute inset-0 bg-gradient-to-br from-beige via-cream to-beige" />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='p'><feTurbulence baseFrequency='0.65' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.55  0 0 0 0 0.42  0 0 0 0 0.28  0 0 0 0.35 0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>\")",
                  }}
                />

                {/* Watercolor illustration */}
                <div className="absolute inset-x-10 top-20 h-[52%] rounded-md overflow-hidden">
                  <img
                    src={illus}
                    alt=""
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/40" />
                </div>

                {/* Cover typography */}
                <div className="absolute inset-0 p-10 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-brown">
                    Memoir · MMXXVI
                  </div>
                  <div className="mt-auto">
                    <div className="h-px bg-brown/40 mb-5" />
                    <h2 className="serif text-[2rem] md:text-[2.4rem] leading-[1.05]">
                      Leyla Məmmədovanın <em className="text-brown">hekayəsi</em>
                    </h2>
                    <p className="serif italic text-base text-foreground/70 mt-3">
                      Bir ömrün xatirələri
                    </p>
                    <div className="h-px bg-brown/40 mt-5" />
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/55 mt-4">
                      <span>Nəfəs Press</span>
                      <span>I — IV</span>
                    </div>
                  </div>
                </div>

                {/* Spine shadow */}
                <div className="absolute left-0 inset-y-0 w-3 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
                {/* Top sheen */}
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
                <GrainOverlay />
              </motion.div>

              {/* Inner spread peeking */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}
                className="relative mx-auto max-w-md mt-10 grid grid-cols-2 rounded-md overflow-hidden shadow-[0_40px_80px_-30px_rgba(60,40,20,0.45)] ring-1 ring-cream"
              >
                {/* Left page — text */}
                <div className="relative bg-paper p-6 aspect-[3/4]">
                  <div className="flex items-baseline justify-between text-[9px] uppercase tracking-[0.3em] text-brown">
                    <span>Fəsil I</span>
                    <span className="text-foreground/40">6</span>
                  </div>
                  <h3 className="serif text-2xl mt-3 leading-tight">
                    Uşaqlıq <em className="text-brown">illəri</em>
                  </h3>
                  <div className="mt-3 w-10 h-px bg-brown/40" />
                  <p className="serif italic text-[13px] text-foreground/75 mt-4 leading-relaxed">
                    "Şuşa küçələrində qaçırdıq, qarın səsi hələ də qulağımdadır.
                    Atam axşamlar bizə nağıl danışar, anam tut mürəbbəsi
                    bişirərdi..."
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-[3px] bg-foreground/10 rounded-full"
                        style={{ width: `${70 + (i * 13) % 30}%` }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-foreground/40">
                    <span className="serif italic normal-case tracking-normal">— Leyla</span>
                    <span>Nəfəs</span>
                  </div>
                  <GrainOverlay />
                </div>

                {/* Right page — illustration + caption */}
                <div className="relative bg-beige p-4 aspect-[3/4] flex flex-col">
                  <div className="relative flex-1 rounded-sm overflow-hidden">
                    <img
                      src={hero4}
                      alt=""
                      className="w-full h-full object-cover sepia-[0.3] saturate-[0.85]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-brown/15 rounded-sm" />
                  </div>
                  <p className="serif italic text-[11px] text-center text-foreground/65 mt-3">
                    — Atam Rəşid, Şuşa, 1952
                  </p>
                  <GrainOverlay />
                </div>

                {/* Spine gutter */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-black/20 via-black/5 to-black/20" />
              </motion.div>
            </motion.div>

            {/* Floating status cards */}
            <motion.div
              initial={{ opacity: 0, x: -24, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
              className="hidden md:flex absolute top-4 -left-8 items-center gap-2.5 bg-background/90 backdrop-blur-md border border-cream rounded-full pl-2 pr-4 py-2 text-xs shadow-xl shadow-brown/10"
            >
              <span className="w-6 h-6 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <span className="serif italic text-foreground/80">
                Proses tamamlandı
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 1 }}
              className="hidden md:flex absolute top-1/3 -right-6 items-center gap-2.5 bg-background/90 backdrop-blur-md border border-cream rounded-full pl-2 pr-4 py-2 text-xs shadow-xl shadow-brown/10"
            >
              <span className="w-6 h-6 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                <Palette className="w-3.5 h-3.5" />
              </span>
              <span className="serif italic text-foreground/80">
                14 illustrasiya yaradıldı
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 1.3 }}
              className="hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 items-center gap-2.5 bg-background/90 backdrop-blur-md border border-cream rounded-full pl-2 pr-4 py-2 text-xs shadow-xl shadow-brown/10"
            >
              <span className="w-6 h-6 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="serif italic text-foreground/80">
                Memoir export edildi
              </span>
            </motion.div>
          </div>

          {/* ──────── RIGHT — Content ──────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/60 border border-cream px-3.5 py-1.5 text-[10px] uppercase tracking-[0.3em] text-brown">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-brown animate-slow-pulse" />
              </span>
              Memoir hazırdır
            </div>

            <h1 className="serif mt-7 text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.02] text-balance">
              Xatirələr artıq <em className="text-brown">unudulmayacaq.</em>
            </h1>

            <p className="mt-7 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Səs yazısından yaradılmış memoir kitabınız artıq hazırdır.
              PDF olaraq yükləyə və gələcək nəsillər üçün qoruya bilərsiniz.
            </p>

            {/* Meta strip */}
            <div className="mt-8 grid grid-cols-3 gap-px bg-cream rounded-2xl overflow-hidden border border-cream">
              {[
                { k: "Səhifə", v: "72" },
                { k: "Fəsil", v: "4" },
                { k: "İllustrasiya", v: "14" },
              ].map((m) => (
                <div key={m.k} className="bg-background px-4 py-4">
                  <div className="serif text-2xl text-foreground">{m.v}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>

            {/* Chapters */}
            <div className="mt-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brown">
                <span className="w-8 h-px bg-brown" /> Fəsillər
              </div>
              <ul className="mt-5 divide-y divide-cream border-y border-cream">
                {chapters.map((c, i) => (
                  <motion.li
                    key={c.n}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.4 + i * 0.08 }}
                    className="flex items-baseline gap-4 py-4 group cursor-pointer hover:text-brown transition-colors"
                  >
                    <span className="serif italic text-brown w-6">{c.n}</span>
                    <span className="serif text-lg md:text-xl">{c.title}</span>
                    <span className="flex-1 border-b border-dotted border-foreground/20 translate-y-[-3px]" />
                    <span className="text-xs text-muted-foreground tabular-nums">
                      səh. {c.p}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.8 }}
              className="relative mt-12 rounded-2xl bg-beige/60 border border-cream p-8 md:p-10 overflow-hidden"
            >
              <GrainOverlay />
              <QuoteIcon className="absolute top-5 right-5 w-7 h-7 text-brown/30" />
              <p className="serif italic text-2xl md:text-[1.7rem] leading-[1.25] text-foreground/90 text-balance">
                "Mən düşünmürdüm ki, həyatım bir gün kitab olacaq."
              </p>
              <footer className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brown">
                <span className="w-6 h-px bg-brown" /> Leyla, 82 yaş
              </footer>
            </motion.blockquote>

            {/* Download CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-brown transition-colors duration-500 shadow-xl shadow-brown/20">
                <Download className="w-4 h-4" /> PDF yüklə
              </button>
              <Link
                to="/upload"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Yenidən yarat
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> 72 səhifə · 4 fəsil
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" /> PDF · 18 MB · çap üçün hazır
              </span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
