import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="serif text-2xl tracking-tight">Nəfəs</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Xatirələr yaşadıqca yaşayır.
          </span>
        </Link>
        <div className="flex items-center gap-8 md:gap-10">
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em] text-foreground/70">
            <a href="/#proses" className="hover:text-foreground transition-colors">Necə işləyir?</a>
            <a href="/#haqqinda" className="hover:text-foreground transition-colors">Haqqında</a>
          </nav>
          <Link
            to="/upload"
            className="rounded-full bg-foreground text-background text-xs uppercase tracking-[0.18em] px-5 py-3 hover:bg-brown transition-colors duration-500"
          >
            Başla
          </Link>
        </div>
      </div>
    </header>
  );
}
