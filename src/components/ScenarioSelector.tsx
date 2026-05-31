import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatedSphere } from "./AnimatedSphere";

interface Scenario {
  key: string;
  title: string;
  desc: string;
  meta: string;
  cta: string;
  days: { time: string; text: string }[];
  includes: string[];
  format: string;
}

const SCENARIOS: Scenario[] = [
  {
    key: "duo",
    title: "Для двоих",
    desc: "Два дня у реки, баня, ужин и утро, которое не хочется торопить.",
    meta: "2 ночи · A-frame / геокупол / mirror cabin · от 55 000 ₽ за пакет",
    cta: "Собрать уикенд",
    days: [
      { time: "День 1 · 15:00", text: "Заезд, тёплый чай, прогулка к реке." },
      { time: "День 1 · 19:00", text: "Баня, купель, парение, тишина." },
      { time: "День 1 · 21:00", text: "Ужин при свечах в ресторане или в домик." },
      { time: "День 2 · 09:30", text: "Завтрак на террасе, утро у воды." },
      { time: "День 2 · 13:00", text: "Поздний выезд без спешки." },
    ],
    includes: [
      "Размещение в домике для двоих",
      "Завтраки на террасе или в домик",
      "1 сеанс бани с парением",
      "Романтический ужин",
      "Поздний выезд",
    ],
    format: "A-frame, геокупол или mirror cabin — на выбор",
  },
  {
    key: "family",
    title: "С детьми",
    desc: "Природа, где детям интересно, а родителям спокойно.",
    meta: "3–7 ночей · Family A-frame / lodge · мастер-классы · безопасные маршруты",
    cta: "Посмотреть семейный сценарий",
    days: [
      { time: "Утро", text: "Завтрак семьёй, прогулка по лесным тропам." },
      { time: "День", text: "Мастер-класс, активности у воды, обед в ресторане." },
      { time: "Вечер", text: "Семейная баня, костёр, ужин и спокойный сон." },
    ],
    includes: [
      "Family A-frame или Family lodge",
      "Детское меню в ресторане",
      "Мастер-классы для детей",
      "Безопасные маршруты и зона у воды",
      "Семейная баня",
    ],
    format: "Family A-frame или lodge на 4–5 гостей",
  },
  {
    key: "team",
    title: "Для команды",
    desc: "Работа, отдых и вечерняя программа в природной среде.",
    meta: "15–90 человек · стратсессии · team reset · event-loft",
    cta: "Запросить КП",
    days: [
      { time: "День 1", text: "Заезд, lunch, стратегическая сессия в event-loft." },
      { time: "Вечер", text: "Баня, ужин, костровая программа." },
      { time: "День 2", text: "Утренняя практика, рабочие группы, ретроспектива." },
    ],
    includes: [
      "Полный выкуп кластера или площадки",
      "Event-loft с техническим оснащением",
      "Питание под программу",
      "Баня и вечерняя программа",
      "Менеджер сопровождения",
    ],
    format: "Barnhouse, Family lodge, A-frame под группу 15–90 чел.",
  },
  {
    key: "wellness",
    title: "Wellness",
    desc: "Несколько дней тишины, практик, бани и восстановления.",
    meta: "3–5 ночей · ретриты · healthy-меню · зал для практик",
    cta: "Посмотреть ретриты",
    days: [
      { time: "Утро", text: "Йога или дыхательная практика в панорамном зале." },
      { time: "День", text: "Healthy-меню, массаж, прогулка восстановления." },
      { time: "Вечер", text: "Баня, купель, чайная церемония, ранний сон." },
    ],
    includes: [
      "Размещение под формат ретрита",
      "Зал для практик",
      "Healthy-меню",
      "Баня, купель, массаж",
      "Сопровождение программы",
    ],
    format: "Для групп ретритов и индивидуально",
  },
  {
    key: "workation",
    title: "Workation",
    desc: "Днём — фокус и тишина. Вечером — лес, баня и ужин у огня.",
    meta: "5–14 ночей · cabin-studio · Wi-Fi · коворкинг",
    cta: "Уехать на будни",
    days: [
      { time: "Утро", text: "Завтрак, focus-блок в cabin-studio." },
      { time: "День", text: "Коворкинг, lunch, короткая прогулка." },
      { time: "Вечер", text: "Баня в будни со скидкой, ужин у огня." },
    ],
    includes: [
      "Cabin-studio с рабочим местом",
      "Стабильный Wi-Fi и коворкинг",
      "Завтраки включены",
      "Скидка на баню в будни",
      "Длинное пребывание от 5 ночей",
    ],
    format: "Cabin-studio или mirror cabin",
  },
];

export function ScenarioSelector() {
  const [open, setOpen] = useState<Scenario | null>(null);

  return (
    <section id="scenarios" className="relative bg-forest py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Сценарии</p>
          <h2 className="display-lg font-display text-balance">
            Выберите свою <span className="italic text-gold">сферу</span>
          </h2>
          <p className="mt-6 text-foreground/75 max-w-xl text-base md:text-lg leading-relaxed">
            Каждый сценарий — это не просто домик, а продуманная поездка:
            с ритмом, питанием, баней, событиями и атмосферой.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* sphere center on desktop */}
          <div className="hidden lg:flex lg:col-span-4 lg:order-2 justify-center">
            <AnimatedSphere size={420} />
          </div>

          <div className="lg:col-span-4 lg:order-1 space-y-3">
            {SCENARIOS.slice(0, 3).map((s, i) => (
              <ScenarioCard key={s.key} s={s} onOpen={setOpen} align="right" delay={i * 0.08} />
            ))}
          </div>

          <div className="lg:col-span-4 lg:order-3 space-y-3">
            {SCENARIOS.slice(3).map((s, i) => (
              <ScenarioCard key={s.key} s={s} onOpen={setOpen} align="left" delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <ScenarioDrawer scenario={open} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ScenarioCard({
  s,
  onOpen,
  align,
  delay,
}: {
  s: Scenario;
  onOpen: (s: Scenario) => void;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      onClick={() => onOpen(s)}
      className={`group w-full text-${align} block bg-card/40 hover:bg-card/70 border border-border hover:border-gold/60 p-6 md:p-7 transition-all duration-500 ring-gold-hover`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
        <ArrowUpRight
          size={18}
          className="text-mist group-hover:text-gold transition-colors mt-2 shrink-0"
        />
      </div>
      <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
      <p className="mt-4 text-[11px] tracking-[0.15em] uppercase text-mist">{s.meta}</p>
      <p className="mt-5 text-[12px] tracking-[0.2em] uppercase text-gold/90 inline-flex items-center gap-2">
        {s.cta}
        <span className="w-6 h-px bg-gold/70 group-hover:w-10 transition-all duration-500" />
      </p>
    </motion.button>
  );
}

function ScenarioDrawer({ scenario, onClose }: { scenario: Scenario; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-forest/80 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[560px] h-full bg-charcoal border-l border-gold/30 overflow-y-auto"
      >
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Сценарий</p>
              <h3 className="font-display text-4xl">{scenario.title}</h3>
            </div>
            <button onClick={onClose} className="p-2 text-mist hover:text-gold" aria-label="Закрыть">
              <X size={22} />
            </button>
          </div>

          <p className="mt-6 text-foreground/80 leading-relaxed">{scenario.desc}</p>
          <p className="mt-3 text-[12px] tracking-[0.2em] uppercase text-gold/90">
            {scenario.format}
          </p>

          <div className="gold-hairline my-10" />

          <h4 className="font-display text-2xl mb-5">Сценарий по дням</h4>
          <ul className="space-y-5">
            {scenario.days.map((d, i) => (
              <li key={i} className="flex gap-5">
                <span className="text-[11px] tracking-[0.2em] uppercase text-gold/90 min-w-[110px] pt-1">
                  {d.time}
                </span>
                <span className="text-sm text-foreground/85 leading-relaxed">{d.text}</span>
              </li>
            ))}
          </ul>

          <div className="gold-hairline my-10" />

          <h4 className="font-display text-2xl mb-5">Что входит</h4>
          <ul className="space-y-3">
            {scenario.includes.map((it) => (
              <li key={it} className="flex gap-3 text-sm text-foreground/85">
                <span className="text-gold mt-1.5">·</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={onClose}
            className="mt-10 inline-flex items-center justify-center w-full px-6 py-4 bg-gold text-forest hover:bg-ivory transition-colors text-sm tracking-wide"
          >
            {scenario.cta}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
