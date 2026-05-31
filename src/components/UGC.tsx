import { motion } from "framer-motion";
import { Send } from "lucide-react";
import morning from "@/assets/morning.jpg";
import banya from "@/assets/banya.jpg";
import dinner from "@/assets/dinner.jpg";
import family from "@/assets/family.jpg";
import event from "@/assets/event.jpg";
import studio from "@/assets/studio.jpg";
import walk from "@/assets/walk.jpg";

const TILES = [
  { img: morning, cap: "утро у реки" },
  { img: banya, cap: "банный weekend" },
  { img: dinner, cap: "ужин в лесу" },
  { img: family, cap: "семейный день" },
  { img: event, cap: "камерная музыка" },
  { img: studio, cap: "workation в будни" },
  { img: walk, cap: "ретрит у воды" },
];

export function UGC() {
  return (
    <section className="bg-forest py-28 md:py-40 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">Атмосфера</p>
            <h2 className="display-lg font-display text-balance">
              Место, которое
              <br />
              <span className="italic text-gold">хочется сохранить</span>
            </h2>
          </div>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="lg:col-span-4 lg:justify-self-end inline-flex items-center gap-3 px-6 py-3 border border-gold/60 text-ivory hover:bg-gold hover:text-forest transition-colors duration-500 text-sm tracking-wide"
          >
            <Send size={16} />
            Смотреть атмосферу в Telegram
          </a>
        </div>
      </div>

      <div className="overflow-x-auto [scrollbar-width:thin] pb-4">
        <div className="flex gap-4 px-6 md:px-10 min-w-max">
          {TILES.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.06 }}
              className="img-zoom relative w-[220px] md:w-[260px] aspect-[9/16] shrink-0 overflow-hidden border border-border"
            >
              <img src={t.img} alt={t.cap} loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-[12px] tracking-[0.15em] uppercase text-ivory">
                {t.cap}
              </p>
            </motion.div>
          ))}
          <div className="w-2 shrink-0" />
        </div>
      </div>
    </section>
  );
}
