import { motion } from "framer-motion";
import { useState } from "react";
import manifestoImg from "@/assets/manifesto.jpg";

const PILLARS = [
  {
    word: "Приватность",
    note: "Домики разнесены по природным кластерам. Никто не заглядывает в окна — даже соседняя терраса остаётся вашей.",
  },
  {
    word: "Восстановление",
    note: "Баня, купель, тишина, прогулки у реки, дыхание и сон, который наконец-то возвращается.",
  },
  {
    word: "Событийность",
    note: "Гастровечера, акустика, ритуалы и камерные программы, которые не нарушают атмосферу места.",
  },
];

export function Manifesto() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-light relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 lg:pr-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="eyebrow mb-8"
            style={{ color: "var(--wood)" }}
          >
            Манифест
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="display-lg font-display text-balance max-w-[18ch]"
          >
            Мы не продаём ночёвку.
            <br />
            <span className="italic" style={{ color: "var(--wood)" }}>
              Мы собираем состояние.
            </span>
          </motion.h2>

          <div className="mt-10 space-y-6 max-w-xl text-[17px] leading-[1.8]" style={{ color: "var(--charcoal)" }}>
            <p>
              В Sfera можно приехать на два дня и почувствовать, будто город
              остался где-то далеко. Здесь есть домики с приватностью, баня и
              пар, завтраки на террасе, прогулки у воды, ужины в тёплом свете
              и события, которые не нарушают тишину, а делают отдых глубже.
            </p>
            <p>
              Это пространство для пар, семей, команд и тех, кому нужно
              восстановиться. У каждого гостя свой ритм: кто-то выбирает баню
              и тишину, кто-то — гастрономический вечер, кто-то —
              стратегическую сессию у леса.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-[oklch(0.84_0.03_80)]">
            {PILLARS.map((p, i) => (
              <button
                key={p.word}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group text-left bg-[var(--ivory)] p-6 sm:p-8 relative transition-colors duration-500 hover:bg-[var(--soft)]"
              >
                <span className="block font-display text-2xl sm:text-3xl mb-3" style={{ color: "var(--charcoal)" }}>
                  {p.word}
                </span>
                <span
                  className={`block text-[13px] leading-relaxed transition-all duration-500 ${
                    active === i ? "opacity-100 max-h-40" : "opacity-60 max-h-12 overflow-hidden"
                  }`}
                  style={{ color: "var(--wood)" }}
                >
                  {p.note}
                </span>
                <span className="absolute left-6 sm:left-8 bottom-4 h-px w-8 bg-[var(--gold)]" />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="img-zoom relative aspect-[3/4] overflow-hidden">
            <img
              src={manifestoImg}
              alt="A-frame домик у реки в утреннем тумане"
              loading="lazy"
              width={896}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block bg-[var(--soft)] px-6 py-5 border-l-2 border-[var(--gold)] max-w-[260px]">
            <p className="text-[12px] tracking-[0.2em] uppercase" style={{ color: "var(--wood)" }}>
              два дня, которые
            </p>
            <p className="font-display text-2xl mt-1" style={{ color: "var(--charcoal)" }}>
              ощущаются как маленький отпуск
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
