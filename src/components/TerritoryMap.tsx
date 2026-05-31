import { useState } from "react";
import { motion } from "framer-motion";

interface Zone {
  id: string;
  label: string;
  short: string;
  text: string;
  x: number; // %
  y: number;
}

const ZONES: Zone[] = [
  { id: "river", label: "Река Дубна", short: "Граница территории", text: "Песчаный берег, тихие заводи, утренний туман над водой.", x: 8, y: 70 },
  { id: "priv", label: "Приватные кластеры", short: "Домики для пар", text: "A-frame, mirror cabin и геокуполы, разнесённые по лесным полянам.", x: 28, y: 35 },
  { id: "family", label: "Семейный кластер", short: "Family lodge / A-frame", text: "Family-форматы рядом с детской зоной и безопасными тропами.", x: 50, y: 25 },
  { id: "wellness", label: "Wellness-зона", short: "Зал практик", text: "Зал для йоги и дыхания с панорамным видом на лес.", x: 65, y: 50 },
  { id: "banya", label: "Банный комплекс", short: "Парная и купели", text: "Русская баня, горячая купель, зона отдыха, чайная.", x: 78, y: 65 },
  { id: "rest", label: "Ресторан", short: "Сезонная кухня", text: "Открытая кухня, печь, камин и неспешные ужины.", x: 42, y: 60 },
  { id: "beach", label: "Beach bar / grab-and-go", short: "У реки", text: "Кофе, лёгкие закуски, picnic-наборы навынос.", x: 18, y: 80 },
  { id: "loft", label: "Event-loft", short: "Камерные форматы", text: "70–90 в посадке, до 120 на фуршете, техническое оснащение.", x: 70, y: 30 },
  { id: "open", label: "Open-air зона", short: "Под выкуп", text: "Открытая площадка под расширенные сценарии до 150 гостей.", x: 82, y: 38 },
  { id: "trails", label: "Прогулочные тропы", short: "Деревянные настилы", text: "Маршруты, связывающие все зоны территории.", x: 38, y: 80 },
  { id: "active", label: "Active-wellness", short: "Движение", text: "Зона для активных практик, утренних пробежек, разминки.", x: 60, y: 78 },
  { id: "kids", label: "Детская зона", short: "Безопасное игровое", text: "Площадка и мастер-классы в семейном кластере.", x: 52, y: 18 },
  { id: "park", label: "Парковка", short: "Заезд гостей", text: "На въезде, дальше — только пешком и на электрокарах.", x: 90, y: 88 },
];

export function TerritoryMap() {
  const [active, setActive] = useState<Zone>(ZONES[0]);

  return (
    <section id="territory" className="bg-forest py-28 md:py-40 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Территория</p>
            <h2 className="display-lg font-display text-balance">
              25 гектаров, где каждому
              <br />
              <span className="italic text-gold">сценарию есть своё место</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/75 leading-relaxed">
            Территория устроена так, чтобы разные сценарии не конфликтовали.
            Приватные домики остаются тихими, event-зона вынесена отдельно,
            а прогулочные тропы связывают весь опыт в один маршрут.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative aspect-[16/10] bg-[oklch(0.18_0.015_150)] border border-border overflow-hidden">
            {/* river */}
            <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="river" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.45 0.04 220 / 0.5)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.06 200 / 0.3)" />
                </linearGradient>
                <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="oklch(0.72 0.10 80 / 0.18)" />
                </pattern>
              </defs>
              <rect width="1000" height="600" fill="url(#dots)" />
              <path
                d="M -40 480 C 200 420, 320 560, 520 500 S 820 380, 1080 460 L 1080 620 L -40 620 Z"
                fill="url(#river)"
              />
              <path
                d="M -40 480 C 200 420, 320 560, 520 500 S 820 380, 1080 460"
                fill="none"
                stroke="oklch(0.72 0.10 80 / 0.4)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              {/* trails */}
              <path
                d="M 100 200 C 250 220, 380 320, 520 340 S 780 280, 900 360"
                fill="none"
                stroke="oklch(0.72 0.10 80 / 0.25)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            </svg>

            {ZONES.map((z) => {
              const isActive = active.id === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => setActive(z)}
                  onMouseEnter={() => setActive(z)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${z.x}%`, top: `${z.y}%` }}
                  aria-label={z.label}
                >
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      isActive ? "w-4 h-4 bg-gold" : "w-2.5 h-2.5 bg-gold/50"
                    }`}
                    style={isActive ? { boxShadow: "0 0 0 6px oklch(0.72 0.10 80 / 0.15), 0 0 20px oklch(0.72 0.10 80 / 0.6)" } : {}}
                  />
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] tracking-[0.15em] uppercase transition-all duration-500 ${
                      isActive ? "text-gold opacity-100" : "text-mist opacity-60 group-hover:opacity-100"
                    }`}
                  >
                    {z.label}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-card/40 border border-border p-8 self-start"
          >
            <p className="eyebrow mb-4">{active.short}</p>
            <h3 className="font-display text-3xl">{active.label}</h3>
            <div className="gold-hairline my-6" />
            <p className="text-sm text-foreground/80 leading-relaxed">{active.text}</p>
            <p className="mt-8 text-[11px] tracking-[0.2em] uppercase text-mist">
              Наведите на точку, чтобы рассмотреть зону
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
