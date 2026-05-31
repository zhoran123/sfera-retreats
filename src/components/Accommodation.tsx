import { motion } from "framer-motion";
import aframe from "@/assets/aframe.jpg";
import dome from "@/assets/dome.jpg";
import mirror from "@/assets/mirror.jpg";
import family from "@/assets/family.jpg";
import studio from "@/assets/studio.jpg";
import barnhouse from "@/assets/barnhouse.jpg";
import manifesto from "@/assets/manifesto.jpg";

const ITEMS = [
  {
    img: aframe,
    name: "Малые A-frame / tiny-house",
    units: "10 юнитов · 2 гостя",
    price: "от 14 000 ₽ в будни · от 19 000 ₽ в выходные",
    tag: "Для пары",
    text: "Компактный домик для пары, которая хочет приватности, вида и тёплого света вечером.",
  },
  {
    img: dome,
    name: "Геокуполы",
    units: "8 юнитов · 2 гостя",
    price: "от 13 000 ₽ в будни · от 18 000 ₽ в выходные",
    tag: "Для пары",
    text: "Сферическая архитектура, панорамное окно и ощущение отдельного мира внутри леса.",
  },
  {
    img: mirror,
    name: "Панорамные cabin / mirror cabin",
    units: "6 юнитов · 2 гостя",
    price: "от 17 000 ₽ в будни · от 24 000 ₽ в выходные",
    tag: "Особые даты",
    text: "Больше воздуха, света и приватности. Для особых дат, workation и тихого отдыха.",
  },
  {
    img: family,
    name: "Family A-frame",
    units: "6 юнитов · 4–5 гостей",
    price: "от 18 000 ₽ в будни · от 26 000 ₽ в выходные",
    tag: "Для семьи",
    text: "Для семейных каникул: две зоны сна, кухня, безопасная территория рядом.",
  },
  {
    img: manifesto,
    name: "Family lodge",
    units: "4 юнита · 4–5 гостей",
    price: "от 20 000 ₽ в будни · от 28 000 ₽ в выходные",
    tag: "Для семьи",
    text: "Больше пространства для семьи, долгих выходных и отдыха с детьми.",
  },
  {
    img: studio,
    name: "Cabin-studio",
    units: "4 юнита · 1–2 гостя",
    price: "от 9 000 ₽ в будни · от 14 000 ₽ в выходные",
    tag: "Workation",
    text: "Для workation, ретритов и спокойных будней у реки.",
  },
  {
    img: barnhouse,
    name: "Barnhouse",
    units: "4 юнита · 6–8 гостей",
    price: "от 35 000 ₽ в будни · от 50 000 ₽ в выходные",
    tag: "Для группы",
    text: "Для групп, команд и камерных выездов.",
  },
];

export function Accommodation() {
  return (
    <section id="accommodation" className="relative bg-forest py-28 md:py-40 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Размещение</p>
            <h2 className="display-lg font-display text-balance">
              Домики, разнесённые
              <br />
              <span className="italic text-gold">по природным кластерам</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/75 text-base md:text-lg leading-relaxed">
            42 юнита на 25 гектарах: приватные домики для пар, семейные форматы,
            cabin-studio для workation и barnhouse для групп.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 [scrollbar-width:thin]">
        <div className="flex gap-6 px-6 md:px-10 min-w-max">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.06, ease: "easeOut" }}
              className="group w-[320px] md:w-[380px] shrink-0 bg-card/30 border border-border ring-gold-hover transition-all duration-500"
            >
              <div className="img-zoom aspect-[4/3] relative">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-forest/70 backdrop-blur px-3 py-1.5 text-gold border border-gold/40">
                  {it.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{it.name}</h3>
                <p className="mt-2 text-[12px] tracking-[0.15em] uppercase text-mist">{it.units}</p>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed min-h-[60px]">{it.text}</p>
                <div className="gold-hairline my-5" />
                <p className="text-[13px] text-ivory/90 leading-relaxed">{it.price}</p>
                <a
                  href="#booking"
                  className="mt-5 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-gold group-hover:gap-3 transition-all"
                >
                  Подробнее
                  <span className="w-6 h-px bg-gold" />
                </a>
              </div>
            </motion.article>
          ))}
          <div className="w-2 shrink-0" />
        </div>
      </div>
    </section>
  );
}
