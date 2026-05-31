import { motion } from "framer-motion";
import event from "@/assets/event.jpg";

const EVENTS = [
  "Гастрономические вечера",
  "Акустика и камерная музыка",
  "Банные ритуалы",
  "Сезонные фестивальные форматы",
  "Кинопоказы под открытым небом",
  "Зимние программы",
  "Корпоративные вечера",
  "Костровые программы",
];

export function Events() {
  return (
    <section id="events" className="relative py-28 md:py-40 overflow-hidden">
      <img
        src={event}
        alt=""
        aria-hidden
        loading="lazy"
        width={1280}
        height={896}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/80 to-forest/95" />
      {/* lanterns */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/80"
            style={{
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              top: `${10 + ((i * 37) % 75)}%`,
              left: `${5 + ((i * 53) % 90)}%`,
              filter: "blur(2px)",
              boxShadow: "0 0 24px 6px oklch(0.72 0.10 80 / 0.5)",
              animation: `gold-pulse ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">События</p>
          <h2 className="display-lg font-display text-balance">
            События, которые
            <br />
            <span className="italic text-gold">не нарушают тишину</span>
          </h2>
          <p className="mt-6 text-foreground/80 max-w-xl leading-relaxed">
            В Sfera события не спорят с природой. Они происходят мягко:
            гастрономический вечер, акустическая музыка, банный ритуал,
            кинопоказ под открытым небом, камерный ужин или закрытый формат.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENTS.map((e, i) => (
            <motion.div
              key={e}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
              className="group relative border border-border bg-forest/60 backdrop-blur-sm px-6 py-8 hover:border-gold/60 transition-all duration-500"
            >
              <span className="block text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-3">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl leading-tight">{e}</h3>
              <span className="absolute left-6 bottom-5 w-6 h-px bg-gold/60 group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
