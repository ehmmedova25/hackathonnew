import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-cream py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <div className="serif text-3xl">Nəfəs</div>
          <p className="text-sm text-muted-foreground mt-2">Xatirələr yaşadıqca yaşayır.</p>
        </div>
        <div className="flex md:justify-end items-center gap-8 text-xs uppercase tracking-[0.18em] text-foreground/70">
          <a href="/#haqqinda" className="hover:text-foreground">Haqqında</a>
          <a href="/#proses" className="hover:text-foreground">Necə işləyir?</a>
          <a href="mailto:salam@nefes.az" className="hover:text-foreground">Əlaqə</a>
          <a aria-label="Instagram" href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-cream/50 transition">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-cream/60 flex flex-col md:flex-row gap-2 justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>© 2026 Nəfəs</span>
        <span>Made with care · Bakı</span>
      </div>
    </footer>
  );
}
