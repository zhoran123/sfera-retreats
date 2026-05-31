import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category =
  | "Приватное размещение"
  | "Семейный отдых"
  | "Восстановление"
  | "Банные ритуалы"
  | "События"
  | "Общественный центр"
  | "Еда у реки"
  | "Активный отдых"
  | "Прибытие"
  | "Внутренняя логистика";

interface Zone {
  id: string;
  label: string;
  category: Category;
  description: string;
  inside: string[];
  fit: string;
  x: number;
  y: number;
  muted?: boolean;
}

const ZONES: Zone[] = [
  {
    id: "welcome",
    label: "Welcome-зона",
    category: "Прибытие",
    description:
      "Первая точка контакта с SFERA. Здесь гость оставляет автомобиль, проходит ресепшн и мягко переходит из городской среды в природный сценарий отдыха.",
    inside: ["Ресепшн", "Парковка", "Навигация", "Электрокары"],
    fit: "Все гости",
    x: 88,
    y: 86,
  },
  {
    id: "service",
    label: "Сервисная зона",
    category: "Внутренняя логистика",
    description:
      "Скрытая хозяйственная зона для поставок, хранения и работы персонала. Отделена от основных гостевых маршрутов, чтобы не разрушать атмосферу отдыха.",
    inside: ["Склад", "Хозяйственный двор", "Прачечная", "Служебный подъезд"],
    fit: "Персонал и обслуживание",
    x: 92,
    y: 72,
    muted: true,
  },
  {
    id: "couples",
    label: "Тихий кластер для пар",
    category: "Приватное размещение",
    description:
      "Самая спокойная часть территории с A-frame, геокуполами и приватными террасами. Пространство для романтических уикендов, восстановления и отдыха без лишнего шума.",
    inside: ["A-frame", "Геокупола", "Mirror cabin", "Костровые места"],
    fit: "Пары, романтический отдых, digital detox",
    x: 14,
    y: 32,
  },
  {
    id: "family",
    label: "Семейный кластер",
    category: "Семейный отдых",
    description:
      "Отдельная безопасная зона для семей с детьми, рядом с детской инфраструктурой и мягкими активностями.",
    inside: ["Family lodge", "Семейные A-frame", "Веранды", "Мастер-классы"],
    fit: "Семьи с детьми, каникулы, спокойный активный отдых",
    x: 30,
    y: 22,
  },
  {
    id: "kids",
    label: "Детская зона",
    category: "Семейный отдых",
    description:
      "Безопасная игровая инфраструктура и мастер-классы, объединённые с семейным кластером в единый маршрут.",
    inside: ["Игровая площадка", "Мастерская", "Тихая лужайка", "Сопровождение"],
    fit: "Семьи с детьми",
    x: 38,
    y: 30,
  },
  {
    id: "wellness",
    label: "Wellness-зона",
    category: "Восстановление",
    description:
      "Уединённое пространство для spa, массажа, йоги, медитаций и практик восстановления. Отделено от событийных и спортивных потоков.",
    inside: ["Spa", "Массажные кабинеты", "Зал практик", "Зоны тишины"],
    fit: "Wellness-гости, ретриты, восстановление",
    x: 22,
    y: 58,
  },
  {
    id: "banya",
    label: "Банный комплекс",
    category: "Банные ритуалы",
    description:
      "Комплекс у реки с банями, купелями и зонами отдыха после парения. Связан с wellness-сценарием и прогулками вдоль берега.",
    inside: ["Русские бани", "Купели", "Террасы", "Травяной чай"],
    fit: "Пары, компании, wellness-отдых",
    x: 18,
    y: 78,
  },
  {
    id: "restaurant",
    label: "Ресторан",
    category: "Общественный центр",
    description:
      "Главная гастрономическая точка территории с рестораном, баром, верандой и локальными продуктами. На территории также есть beach bar, grab-and-go и доставка в домики.",
    inside: ["Ресторан", "Лобби-бар", "Веранда", "Локальная лавка"],
    fit: "Все гости, завтраки, ужины, события",
    x: 50,
    y: 50,
  },
  {
    id: "beach",
    label: "Beach bar / grab-and-go",
    category: "Еда у реки",
    description:
      "Лёгкая точка питания у воды для прогулок, пляжного отдыха и активного берега. Помогает распределить питание по территории.",
    inside: ["Напитки", "Снеки и кофе", "Быстрые завтраки", "Пикник-наборы"],
    fit: "Семьи, пары, прогулки, активный берег",
    x: 42,
    y: 82,
  },
  {
    id: "event",
    label: "Event-loft",
    category: "События",
    description:
      "Камерная площадка для гастроужинов, корпоративных выездов, лекций, акустических концертов и сезонных программ. Комфортная посадка 70–90 гостей, до 120 в формате фуршета или лекции; расширенный сценарий — через open-air при полном выкупе территории.",
    inside: ["Event-loft", "Терраса", "Backstage / service-доступ", "Лаунж"],
    fit: "Корпоративы, камерные события, частные мероприятия",
    x: 72,
    y: 42,
  },
  {
    id: "openair",
    label: "Open-air зона",
    category: "События",
    description:
      "Открытая площадка рядом с event-loft — расширение событийного сценария на природе. Используется при полном выкупе территории.",
    inside: ["Сцена", "Костровая", "Шатёр под запрос", "Световая инсталляция"],
    fit: "Расширенные камерные события",
    x: 82,
    y: 36,
  },
  {
    id: "active",
    label: "Спорт и active-wellness",
    category: "Активный отдых",
    description:
      "Лёгкая спортивная зона в формате lifestyle-отдыха на природе, без ощущения большого спортивного комплекса.",
    inside: ["Падел", "Теннис", "Мини-гольф", "Outdoor-волейбол"],
    fit: "Активные гости, семьи, компании",
    x: 66,
    y: 70,
  },
];

type ScenarioKey = "all" | "couple" | "family" | "wellness" | "event" | "active";

const SCENARIOS: { key: ScenarioKey; label: string; zones: string[] }[] = [
  { key: "all", label: "Все зоны", zones: [] },
  { key: "couple", label: "Пара", zones: ["couples", "restaurant", "banya"] },
  { key: "family", label: "Семья", zones: ["family", "kids", "beach", "restaurant"] },
  { key: "wellness", label: "Wellness", zones: ["wellness", "banya"] },
  { key: "event", label: "Событие", zones: ["welcome", "event", "openair", "restaurant"] },
  { key: "active", label: "Активный отдых", zones: ["active", "beach", "banya"] },
];

// Routes as SVG paths on a 1000x600 viewBox
const ROUTES: { key: string; label: string; d: string; scenarios: ScenarioKey[] }[] = [
  {
    key: "shore",
    label: "Береговой путь",
    d: "M 160 500 C 280 470, 360 490, 460 500 S 640 470, 720 460",
    scenarios: ["couple", "active"],
  },
  {
    key: "silence",
    label: "Тропа тишины",
    d: "M 160 200 C 230 260, 280 320, 320 360 S 380 420, 420 460",
    scenarios: ["couple", "wellness"],
  },
  {
    key: "family",
    label: "Семейный маршрут",
    d: "M 320 150 C 360 220, 400 300, 420 490",
    scenarios: ["family"],
  },
  {
    key: "event",
    label: "Event route",
    d: "M 870 510 C 820 460, 760 380, 720 260 S 760 220, 800 220",
    scenarios: ["event"],
  },
  {
    key: "service",
    label: "Сервисный маршрут",
    d: "M 905 430 C 800 420, 640 360, 520 320 S 740 280, 760 260",
    scenarios: ["event"],
  },
  {
    key: "forest",
    label: "Лесная тропа",
    d: "M 220 360 C 280 400, 360 420, 460 420 S 580 380, 660 420",
    scenarios: ["wellness"],
  },
];

export function TerritoryMap() {
  const [active, setActive] = useState<Zone>(ZONES.find((z) => z.id === "couples")!);
  const [scenario, setScenario] = useState<ScenarioKey>("all");

  const highlighted = useMemo(() => {
    const s = SCENARIOS.find((sc) => sc.key === scenario)!;
    return new Set(s.zones);
  }, [scenario]);

  const isDimmed = (z: Zone) =>
    scenario !== "all" && !highlighted.has(z.id);

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
            Территория разделена на приватные, семейные, wellness, событийные,
            активные и сервисные зоны. Маршруты построены так, чтобы сценарии
            не пересекались — тихие домики остаются тихими.
          </p>
        </div>

        {/* Scenario switches */}
        <div className="mb-8 flex flex-wrap gap-2">
          {SCENARIOS.map((s) => (
            <button
              key={s.key}
              onClick={() => setScenario(s.key)}
              className={`text-[11px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-500 ${
                scenario === s.key
                  ? "border-gold text-gold bg-gold/5"
                  : "border-border text-mist hover:border-gold/60 hover:text-ivory"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Map */}
          <div className="lg:col-span-8 relative aspect-[16/10] bg-[oklch(0.18_0.015_150)] border border-border overflow-hidden">
            <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="river" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.45 0.04 220 / 0.55)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.06 200 / 0.3)" />
                </linearGradient>
                <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="oklch(0.72 0.10 80 / 0.16)" />
                </pattern>
                <radialGradient id="forest" cx="35%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="oklch(0.30 0.04 150 / 0.4)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="1000" height="600" fill="url(#dots)" />
              <rect width="1000" height="600" fill="url(#forest)" />
              {/* River */}
              <path
                d="M -40 520 C 200 470, 360 540, 520 510 S 820 440, 1080 490 L 1080 640 L -40 640 Z"
                fill="url(#river)"
              />
              <path
                d="M -40 520 C 200 470, 360 540, 520 510 S 820 440, 1080 490"
                fill="none"
                stroke="oklch(0.72 0.10 80 / 0.35)"
                strokeWidth="1"
                strokeDasharray="3 6"
              />
              {/* service zone subtle hatch */}
              <rect x="860" y="640" width="0" height="0" />
              {/* Routes */}
              {ROUTES.map((r) => {
                const isOn =
                  scenario === "all" || r.scenarios.includes(scenario);
                return (
                  <path
                    key={r.key}
                    d={r.d}
                    fill="none"
                    stroke={isOn ? "oklch(0.72 0.10 80 / 0.55)" : "oklch(0.72 0.10 80 / 0.12)"}
                    strokeWidth={isOn && scenario !== "all" ? 1.4 : 1}
                    strokeDasharray={r.key === "service" ? "1 5" : "3 6"}
                    className="transition-all duration-700"
                  />
                );
              })}
              {/* subtle territory boundary */}
              <rect
                x="6"
                y="6"
                width="988"
                height="588"
                fill="none"
                stroke="oklch(0.72 0.10 80 / 0.1)"
                strokeDasharray="2 8"
              />
            </svg>

            {ZONES.map((z) => {
              const isActive = active.id === z.id;
              const dim = isDimmed(z);
              const size = isActive ? 16 : z.muted ? 8 : 11;
              return (
                <button
                  key={z.id}
                  onClick={() => setActive(z)}
                  onMouseEnter={() => setActive(z)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  style={{
                    left: `${z.x}%`,
                    top: `${z.y}%`,
                    opacity: dim ? 0.25 : 1,
                    transition: "opacity 600ms ease",
                  }}
                  aria-label={z.label}
                >
                  <span
                    className="block rounded-full transition-all duration-500"
                    style={{
                      width: size,
                      height: size,
                      background: isActive
                        ? "var(--gold)"
                        : z.muted
                        ? "oklch(0.72 0.10 80 / 0.35)"
                        : "oklch(0.72 0.10 80 / 0.55)",
                      boxShadow: isActive
                        ? "0 0 0 6px oklch(0.72 0.10 80 / 0.15), 0 0 22px oklch(0.72 0.10 80 / 0.65)"
                        : "none",
                    }}
                  />
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] md:text-[11px] tracking-[0.15em] uppercase transition-all duration-500 ${
                      isActive
                        ? "text-gold opacity-100"
                        : z.muted
                        ? "text-mist/50 opacity-50 group-hover:opacity-90"
                        : "text-mist opacity-65 group-hover:opacity-100"
                    }`}
                  >
                    {z.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Info card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-4 bg-card/40 border border-border p-8 self-start"
            >
              <p className="eyebrow mb-4">{active.category}</p>
              <h3 className="font-display text-3xl leading-tight">{active.label}</h3>
              <div className="gold-hairline my-6" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                {active.description}
              </p>

              <p className="mt-7 text-[11px] tracking-[0.2em] uppercase text-mist mb-3">
                Внутри зоны
              </p>
              <ul className="space-y-1.5">
                {active.inside.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-foreground/85 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/80" />
                    {it}
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-5 border-t border-border/60">
                <p className="text-[11px] tracking-[0.2em] uppercase text-mist mb-2">
                  Подходит для
                </p>
                <p className="text-sm text-foreground/85">{active.fit}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-12 max-w-3xl text-sm text-foreground/65 leading-relaxed">
          Планировка SFERA построена так, чтобы разные сценарии отдыха не
          конфликтовали между собой: приватные домики остаются в тишине,
          семейные зоны находятся рядом с детской инфраструктурой,
          wellness-пространства отделены от активных маршрутов, а event-loft
          имеет собственную логистику для камерных мероприятий.
        </p>
      </div>
    </section>
  );
}
