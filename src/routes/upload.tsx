import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Mic, Upload, ArrowRight, FileAudio, Clock, CheckCircle2 } from "lucide-react";
import { GrainOverlay, LightLeaks } from "@/components/GrainOverlay";
import hero3 from "@/assets/hero-3.jpg";
import hero5 from "@/assets/hero-5.jpg";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Audio yüklə — Nəfəs" },
      { name: "description", content: "Sevdiyiniz bir insanın səsini yükləyin. Nəfəs onu memoir kitabına çevirsin." },
    ],
  }),
  component: UploadPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function pick(f: File | null | undefined) {
    if (!f) return;
    setFile(f);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <LightLeaks />
      <GrainOverlay />

      {/* Background blurred memoir pages */}
      <img src={hero5} alt="" aria-hidden className="absolute -top-20 -left-20 w-[420px] opacity-20 blur-2xl rotate-[-8deg] pointer-events-none" />
      <img src={hero3} alt="" aria-hidden className="absolute -bottom-20 -right-20 w-[460px] opacity-20 blur-2xl rotate-[6deg] pointer-events-none" />

      {/* Minimal header */}
      <header className="relative pt-10 px-6 md:px-10">
        <Link to="/" className="flex flex-col leading-none w-fit mx-auto text-center">
          <span className="serif text-2xl tracking-tight">Nəfəs</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Xatirələr yaşadıqca yaşayır.
          </span>
        </Link>
      </header>

      <main className="relative flex items-center justify-center px-6 md:px-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative w-full max-w-2xl"
        >
          {/* Floating papers */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-3, -2, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
            className="hidden md:block absolute -top-10 -left-16 w-24 h-32 bg-paper border border-cream rounded-md shadow-xl rotate-[-6deg]"
          >
            <div className="p-2 text-[8px] serif italic text-foreground/40 leading-tight">
              "Anam həmişə deyirdi..."
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [4, 5, 4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            aria-hidden
            className="hidden md:block absolute -bottom-12 -right-16 w-28 h-36 bg-beige border border-cream rounded-md shadow-xl rotate-[7deg]"
          />

          <div className="relative bg-background/80 backdrop-blur-xl border border-cream rounded-3xl shadow-[0_40px_80px_-30px_rgba(60,40,20,0.3)] p-8 md:p-12">
            <GrainOverlay className="rounded-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brown">
                <span className="w-8 h-px bg-brown" /> Audio yüklə
              </div>
              <h1 className="serif mt-5 text-4xl md:text-5xl leading-[1.05]">
                Bir hekayə ilə <em className="text-brown">başlayın.</em>
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Nənənizin, atanızın və ya sevdiyiniz bir insanın səsini yükləyin. Nəfəs həmin xatirələri memoir kitabına çevirəcək.
              </p>

              {/* Dropzone */}
              <label
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  pick(e.dataTransfer.files?.[0]);
                }}
                className={`mt-8 block cursor-pointer rounded-2xl border-2 border-dashed p-10 md:p-14 text-center transition-all duration-500 ${
                  dragging ? "border-brown bg-cream/40" : "border-cream/80 bg-beige/30 hover:border-brown/50 hover:bg-cream/30"
                }`}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="audio/mpeg,audio/wav,audio/mp4,audio/x-m4a,.mp3,.wav,.m4a"
                  className="hidden"
                  onChange={(e) => pick(e.target.files?.[0])}
                />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto w-16 h-16 rounded-2xl bg-background border border-cream flex items-center justify-center text-brown shadow-md"
                >
                  {file ? <CheckCircle2 className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
                </motion.div>
                {file ? (
                  <>
                    <p className="serif text-2xl mt-5">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {(file.size / 1024 / 1024).toFixed(2)} MB · hazır
                    </p>
                  </>
                ) : (
                  <>
                    <p className="serif text-2xl mt-5">Audio faylı bura əlavə edin</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-3">
                      MP3 · WAV · M4A — maks. 100 MB
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Tövsiyə: 3–5 dəqiqəlik səmimi söhbət
                    </p>
                  </>
                )}
              </label>

              <div className="mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => inputRef.current?.click()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition-colors"
                >
                  <Upload className="w-4 h-4" /> Fayl seç
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-cream/50 transition-colors"
                >
                  <Mic className="w-4 h-4" /> Səs yaz
                </button>
                <button
                  disabled={!file}
                  onClick={() => navigate({ to: "/processing" })}
                  className={`group flex-1 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition-all duration-500 ${
                    file
                      ? "bg-foreground text-background hover:bg-brown shadow-lg shadow-brown/10"
                      : "bg-foreground/20 text-background/60 cursor-not-allowed"
                  }`}
                >
                  Davam et <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-cream/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Memoir hazırlanması orta hesabla 1–2 dəqiqə çəkir.</span>
                <span className="inline-flex items-center gap-2"><FileAudio className="w-3.5 h-3.5" /> Səsiniz tam məxfi qalır.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
