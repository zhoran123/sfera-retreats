import { motion } from "framer-motion";
import restaurant from "@/assets/restaurant.jpg";

const ITEMS = [
  "Завтрак в домик",
  "Ужин у воды",
  "BBQ-набор",
  "Гастровечер",
  "Детское меню",
  "Healthy-меню",
];

export function Gastronomy() {
  return (
    <section className="section-light relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-40 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 img-zoom relative aspect-[5/4] overflow-hidden"
        >
          <img
            src={restaurant}
            alt="Интерьер ресторана Sfera"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="lg:col-span-6">
          <p className="eyebrow mb-6" style={{ color: "var(--wood)" }}>
            Ресторан и гастрономия
          </p>
          <h2 className="display-lg font-display text-balance">
            Ужин как
            <br />
            <span className="italic" style={{ color: "var(--wood)" }}>событие</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.8]" style={{ color: "var(--charcoal)" }}>
            Ресторан Sfera работает с сезонными продуктами, огнём, локальными
            вкусами и форматом неспешного ужина. Завтрак в домик, picnic-набор,
            ужин при свечах или гастрономический вечер с приглашённым шефом.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-px bg-[oklch(0.84_0.03_80)]">
            {ITEMS.map((it) => (
              <li
                key={it}
                className="bg-[var(--ivory)] hover:bg-[var(--soft)] px-5 py-6 transition-colors duration-500 flex items-center justify-between gap-3"
              >
                <span className="font-display text-xl" style={{ color: "var(--charcoal)" }}>
                  {it}
                </span>
                <span className="w-6 h-px bg-[var(--gold)]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
