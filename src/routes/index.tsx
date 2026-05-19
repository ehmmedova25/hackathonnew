import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Mic, Sparkles, BookOpen, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BookMockup } from "@/components/BookMockup";
import { GrainOverlay, LightLeaks } from "@/components/GrainOverlay";
import quoteBg from "@/assets/quote-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nəfəs — Ailə söhbətlərindən memoir kitabı" },
      { name: "description", content: "Nənənizin, atanızın səsini yükləyin. Nəfəs onu illustrasiyalı memoir kitabına çevirsin." },
    ],
  }),
  component: Index,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Preview />
        <Quote />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-10">
      <LightLeaks />
      <GrainOverlay />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[1fr_0.85fr] gap-12 md:gap-16 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brown">
            <span className="w-8 h-px bg-brown" />
            AI ilə ailə xatirələri
          </div>
          <h1 className="serif mt-6 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]">
            Bəzi səslər
            <br />
            <em className="text-brown">unudulmamalıdır.</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
            Nəfəs ailə söhbətlərini süni intellekt vasitəsilə illustrasiyalı memoir kitabına çevirir.
            Bir audio fayl — bir ömürlük xatirə.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/upload"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-sm tracking-wider hover:bg-brown transition-all duration-500 shadow-lg shadow-brown/10 hover:shadow-brown/20"
            >
              <Mic className="w-4 h-4" />
              <span>Audio yüklə → memoir yarat</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground border-b border-foreground/20 hover:border-foreground/60 pb-1 transition-colors">
              <Play className="w-3 h-3" /> Demo izlə
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>· 1–2 dəqiqədə hazır</span>
            <span>· MP3 / WAV / M4A</span>
            <span>· PDF olaraq saxla</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Mic, n: "01", title: "Səsi yüklə", desc: "Nənənizin və ya atanızın hekayəsini audio olaraq yükləyin." },
    { icon: Sparkles, n: "02", title: "AI memoir yaradır", desc: "Süni intellekt xatirələri chapter-lara və illustrasiyalara çevirir." },
    { icon: BookOpen, n: "03", title: "PDF kitabını əldə et", desc: "Hekayə gələcək nəsillər üçün qorunur." },
  ];
  return (
    <section id="proses" className="relative px-6 md:px-10 py-28 md:py-40 bg-beige/40">
      <GrainOverlay />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brown">
            <span className="w-8 h-px bg-brown" /> Proses
          </div>
          <h2 className="serif mt-6 text-4xl md:text-6xl leading-[1.05]">
            Bir söhbətdən, <em className="text-brown">bir əsərə.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
            Üç sadə addım. Heç bir texniki bilik tələb olunmur — yalnız bir səs və bir hekayə.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: EASE, delay: i * 0.12 }}
              className="group relative rounded-3xl border border-cream bg-background p-8 md:p-10 hover:shadow-lg hover:border-brown/20 transition-all duration-700"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-cream/60 text-brown flex items-center justify-center group-hover:bg-brown group-hover:text-background transition-colors duration-700">
                  <s.icon className="w-6 h-6" />
                </div>
                <span className="serif italic text-3xl text-brown/40">{s.n}</span>
              </div>
              <h3 className="serif text-2xl md:text-3xl mt-8">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preview() {
  return (
    <section id="haqqinda" className="relative px-6 md:px-10 py-28 md:py-40">
      <LightLeaks />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <BookMockup />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brown">
            <span className="w-8 h-px bg-brown" /> Önizləmə
          </div>
          <h2 className="serif mt-6 text-4xl md:text-6xl leading-[1.05]">
            Nəticə sizi <em className="text-brown">heyrətə salacaq.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg font-light leading-relaxed">
            Hər memoir bənzərsizdir. Sulu boya illustrasiyalar, elegant tipoqrafiya və real kağız hissi — gələcək nəsillərə miras qalmağa layiq bir kitab.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            <li className="flex gap-3"><span className="text-brown">—</span> Avtomatik chapter bölgüsü və başlıqlar</li>
            <li className="flex gap-3"><span className="text-brown">—</span> Sulu boya üslubunda fərdi illustrasiyalar</li>
            <li className="flex gap-3"><span className="text-brown">—</span> Yüksək keyfiyyətli PDF, çap üçün hazır</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-44 overflow-hidden">
      <img src={quoteBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 light-leak-tl opacity-60" />
      <GrainOverlay className="opacity-20" />
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <p className="serif italic text-3xl md:text-5xl leading-[1.2] text-background text-balance">
          "Mən düşünmürdüm ki, kimsə həyatımı oxumaq istəyər."
        </p>
        <footer className="text-background/80 mt-8 text-sm uppercase tracking-[0.3em]">— Leyla, 82 yaş</footer>
      </motion.blockquote>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-44 text-center overflow-hidden">
      <LightLeaks />
      <GrainOverlay className="opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
        className="relative max-w-4xl mx-auto"
      >
        <h2 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
          Xatirələr <br /> <em className="text-brown">itib getməməlidir.</em>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
          Bu gün danışılan bir hekayə gələcək nəsillər üçün əbədi qala bilər.
        </p>
        <Link
          to="/upload"
          className="inline-flex items-center gap-3 mt-12 rounded-full bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-brown transition-colors duration-500"
        >
          <Mic className="w-4 h-4" />
          Memoir yarat
        </Link>
      </motion.div>
    </section>
  );
}
