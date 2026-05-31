import { motion } from "framer-motion";
import { AnimatedSphere } from "./AnimatedSphere";
import heroImg from "@/assets/hero.jpg";

const tags = [
  "42 юнита",
  "река Дубна",
  "wellness & баня",
  "камерные события",
  "корпоративные выезды",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* background */}
      <img
        src={heroImg}
        alt="Глэмпинг-резорт Sfera у реки Дубна в утреннем тумане"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/55 to-forest" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/20 to-transparent" />

      {/* sphere — right side on desktop, centered behind on mobile */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="hidden md:block translate-x-[10%] -translate-y-4 anim-drift">
          <AnimatedSphere size={640} />
        </div>
        <div className="md:hidden absolute inset-0 flex items-center justify-center opacity-60">
          <AnimatedSphere size={380} />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-36 md:pt-44 pb-32 min-h-screen flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="eyebrow mb-6"
        >
          Глэмпинг-резорт у реки Дубна · 25 га природной территории
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="display-xl font-display text-ivory text-balance max-w-[18ch]"
        >
          Сфера восстановления
          <br />
          <span className="italic text-gold/90">и осмысленных событий</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/85 leading-relaxed"
        >
          Премиальный загородный отдых, где тишина, баня, гастрономия и камерные
          события складываются в готовый сценарий для вас, семьи или команды.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#scenarios"
            className="inline-flex items-center px-7 py-4 bg-gold text-forest text-sm tracking-wide hover:bg-ivory transition-colors duration-500"
          >
            Выбрать сценарий
          </a>
          <a
            href="#booking"
            className="inline-flex items-center px-7 py-4 border border-ivory/40 text-ivory text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-500"
          >
            Забронировать домик
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-14 flex flex-wrap gap-x-6 gap-y-3 max-w-2xl"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] tracking-[0.18em] uppercase text-mist border-b border-mist/20 pb-1"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-mist text-[10px] tracking-[0.25em] uppercase">
        <span>листайте ниже</span>
        <span className="w-px h-12 bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
