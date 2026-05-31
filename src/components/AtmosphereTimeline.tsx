import { motion } from "framer-motion";
import morning from "@/assets/morning.jpg";
import breakfast from "@/assets/breakfast.jpg";
import walk from "@/assets/walk.jpg";
import banya from "@/assets/banya.jpg";
import dinner from "@/assets/dinner.jpg";
import fire from "@/assets/fire.jpg";

const MOMENTS = [
  { time: "08:00", img: morning, title: "Заезд без спешки", text: "Утро у реки, туман над водой, тишина." },
  { time: "09:30", img: breakfast, title: "Завтрак на террасе", text: "Свежий хлеб, кофе и вид на лес." },
  { time: "13:00", img: walk, title: "Прогулка у Дубны", text: "Деревянные тропы и звук воды." },
  { time: "17:00", img: banya, title: "Баня и пар", text: "Жар, веник, купель, восстановление." },
  { time: "20:00", img: dinner, title: "Ужин в тёплом свете", text: "Сезонная кухня, огонь, неспешный разговор." },
  { time: "22:30", img: fire, title: "Камерный вечер в лесу", text: "Фонари, костёр, ощущение полного дня." },
];

export function AtmosphereTimeline() {
  return (
    <section className="relative bg-charcoal py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-16">
        <p className="eyebrow mb-6">Атмосфера</p>
        <h2 className="display-lg font-display text-balance max-w-[16ch]">
          День в <span className="italic text-gold">Sfera</span>
        </h2>
        <p className="mt-6 max-w-xl text-foreground/75">
          Тишина, в которой слышно себя. Шесть моментов одного дня — от утра у реки до камерного вечера в лесу.
        </p>
      </div>

      <div className="overflow-x-auto [scrollbar-width:thin] pb-6">
        <div className="flex gap-8 px-6 md:px-10 min-w-max">
          {MOMENTS.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="w-[300px] md:w-[420px] shrink-0"
            >
              <div className="img-zoom relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-gold">{m.time}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{m.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{m.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="w-2 shrink-0" />
        </div>
      </div>
    </section>
  );
}
