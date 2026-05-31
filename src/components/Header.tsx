import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#scenarios", label: "Сценарии" },
  { href: "#accommodation", label: "Домики" },
  { href: "#wellness", label: "Wellness" },
  { href: "#events", label: "События" },
  { href: "#corporate", label: "Корпоративам" },
  { href: "#territory", label: "Территория" },
  { href: "#booking", label: "Бронирование" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.16_0.015_150/0.78)] border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold/60">
            <span className="absolute inset-1 rounded-full border border-gold/30" />
            <span className="absolute inset-2 rounded-full bg-gold/20" />
          </span>
          <span className="font-display text-2xl tracking-tight">
            Sfera <span className="text-mist text-base align-middle">/ Сфера</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide text-foreground/85">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative py-2 hover:text-gold transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-[13px] tracking-wide border border-gold/70 text-ivory hover:bg-gold hover:text-forest transition-colors duration-500"
        >
          Забронировать
        </a>

        <button
          className="lg:hidden p-2 -mr-2 text-ivory"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-[oklch(0.16_0.015_150/0.96)] backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border/40 text-sm tracking-wide"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center px-5 py-3 border border-gold text-ivory hover:bg-gold hover:text-forest transition"
            >
              Забронировать
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
