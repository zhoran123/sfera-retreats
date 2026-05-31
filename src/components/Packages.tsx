import { motion } from "framer-motion";

const PACKS = [
  {
    name: "Романтический уикенд",
    price: "от 55 000–80 000 ₽",
    points: ["2 ночи", "Домик для двоих", "Завтраки", "Баня / купель", "Романтический ужин", "Сезонная активность"],
    highlight: false,
  },
  {
    name: "Семейный отдых",
    price: "от 75 000–110 000 ₽",
    points: ["3 ночи", "Family-дом", "Завтраки", "Мастер-класс", "Прогулочные маршруты", "Сезонная активность"],
    highlight: false,
  },
  {
    name: "Work & Stay",
    price: "от 45 000–70 000 ₽",
    points: ["от 5 ночей", "Рабочее место", "Wi-Fi и коворкинг", "Завтраки", "Скидка на баню в будни"],
    highlight: false,
  },
  {
    name: "Wellness-ретрит",
    price: "от 18 000–25 000 ₽ / чел. / ночь",
    points: ["3–5 ночей", "Питание", "Зал практик", "Баня", "Healthy-меню", "Йога / дыхание"],
    highlight: true,
  },
  {
    name: "Малый корпоратив",
    price: "от 800 000 ₽",
    points: ["Проживание", "Питание", "Рабочая зона", "Баня", "Вечерняя программа"],
    highlight: false,
  },
  {
    name: "Выкуп площадки / средний корпоратив",
    price: "от 1 500 000 ₽",
    points: ["Индивидуальная программа", "Event-зона", "Питание", "Техническое сопровождение"],
    highlight: false,
  },
];

export function Packages() {
  return (
    <section className="section-light relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6" style={{ color: "var(--wood)" }}>Пакеты и цены</p>
          <h2 className="display-lg font-display text-balance">
            Готовые
            <br />
            <span className="italic" style={{ color: "var(--wood)" }}>сценарии</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(0.84_0.03_80)]">
          {PACKS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.06 }}
              className={`p-8 md:p-10 flex flex-col justify-between min-h-[360px] transition-colors duration-500 ${
                p.highlight ? "bg-[var(--charcoal)] text-[var(--soft)]" : "bg-[var(--ivory)] hover:bg-[var(--soft)]"
              }`}
            >
              <div>
                <h3 className={`font-display text-2xl md:text-3xl ${p.highlight ? "text-soft" : ""}`}
                    style={p.highlight ? {} : { color: "var(--charcoal)" }}>
                  {p.name}
                </h3>
                <div className={`my-5 h-px ${p.highlight ? "bg-gold/60" : ""}`}
                     style={p.highlight ? {} : { background: "var(--wood)", opacity: 0.4 }} />
                <ul className="space-y-2 text-sm leading-relaxed"
                    style={p.highlight ? { color: "oklch(0.93 0.02 85 / 0.85)" } : { color: "var(--charcoal)" }}>
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-[var(--gold)]">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className={`mt-8 font-display text-xl ${p.highlight ? "text-gold" : ""}`}
                 style={p.highlight ? {} : { color: "var(--wood)" }}>
                {p.price}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-[13px]" style={{ color: "var(--wood)" }}>
          Цена зависит от сезона, дня недели, формата размещения и состава программы.
        </p>
      </div>
    </section>
  );
}
