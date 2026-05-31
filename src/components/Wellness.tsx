import { motion } from "framer-motion";
import { Flame, Droplets, Hand, HeartPulse, Wind, MoonStar } from "lucide-react";
import banya from "@/assets/banya.jpg";

const CARDS = [
  { icon: Flame, title: "Русская баня", text: "Жар, пар, веник, ритуал." },
  { icon: Droplets, title: "Горячая купель", text: "Контраст после парной у воды." },
  { icon: Hand, title: "Парение с банщиком", text: "Камерный ритуал на 90 минут." },
  { icon: HeartPulse, title: "Массаж", text: "Восстановительные практики тела." },
  { icon: Wind, title: "Йога и дыхание", text: "Утренние и вечерние группы." },
  { icon: MoonStar, title: "Digital detox", text: "Тишина без уведомлений." },
];

export function Wellness() {
  return (
    <section id="wellness" className="relative bg-[oklch(0.18_0.02_150)] py-28 md:py-40 overflow-hidden">
      {/* steam */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 80%, oklch(0.72 0.10 80 / 0.15), transparent), radial-gradient(50% 50% at 80% 20%, oklch(0.84 0.03 80 / 0.1), transparent)",
        }}
      />
      <img
        src={banya}
        alt=""
        aria-hidden
        loading="lazy"
        width={1280}
        height={896}
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-forest" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Wellness</p>
            <h2 className="display-lg font-display text-balance">
              Восстановление через
              <br />
              <span className="italic text-gold">тело, воду и тишину</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/75 leading-relaxed">
            Банный комплекс, купели, массаж, дыхательные практики, йога,
            прогулки восстановления и чайные церемонии. Wellness в Sfera —
            не отдельная услуга, а естественный ритм пребывания.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.07 }}
              className="group bg-charcoal/80 backdrop-blur p-8 md:p-10 hover:bg-charcoal transition-colors duration-500"
            >
              <c.icon className="text-gold" size={28} strokeWidth={1.2} />
              <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.text}</p>
              <span className="block mt-6 w-8 h-px bg-gold/60 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#booking"
            className="inline-flex items-center px-7 py-4 border border-gold/70 text-ivory hover:bg-gold hover:text-forest transition-colors duration-500 text-sm tracking-wide"
          >
            Собрать wellness-уикенд
          </a>
        </div>
      </div>
    </section>
  );
}
