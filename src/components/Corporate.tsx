import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

const FORMATS = ["Стратсессия", "Team reset", "Камерный корпоратив", "Выезд топ-команды", "Wellness для команды"];

const schema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80),
  company: z.string().trim().min(2, "Укажите компанию").max(120),
  phone: z.string().trim().min(6, "Укажите телефон").max(30),
  email: z.string().trim().email("Некорректный email").max(120),
  format: z.string().min(1),
  dates: z.string().trim().max(80).optional().or(z.literal("")),
  guests: z.string().trim().max(20).optional().or(z.literal("")),
  comment: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function Corporate() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      toast.error(res.error.issues[0]?.message ?? "Проверьте поля формы");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Спасибо. Мы пришлём коммерческое предложение в ближайшее время.");
    }, 700);
  }

  return (
    <section id="corporate" className="relative bg-[oklch(0.16_0.02_150)] py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: "radial-gradient(60% 50% at 80% 10%, oklch(0.72 0.10 80 / 0.12), transparent)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">Корпоративные выезды</p>
          <h2 className="display-lg font-display text-balance">
            Для команд, которым нужна
            <br />
            <span className="italic text-gold">не просто переговорная</span>
          </h2>
          <p className="mt-6 max-w-xl text-foreground/80 leading-relaxed">
            Sfera организует выезды под ключ: размещение, питание, рабочее
            пространство, техническое оснащение, баня, вечерняя программа и
            сопровождение менеджера. Подходит для стратегических сессий,
            team reset, камерных корпоративов и закрытых ретритов для топ-команд.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 border border-gold/40 bg-forest/40 p-7"
          >
            <p className="eyebrow mb-3" style={{ color: "var(--gold)" }}>Вместимость</p>
            <p className="text-foreground/85 leading-relaxed text-[15px]">
              Event-loft рассчитан на комфортные камерные форматы: <b className="text-ivory">70–90 гостей в посадке</b>,
              <b className="text-ivory"> до 120 гостей</b> в формате фуршета или лекции. Расширенные сценарии
              <b className="text-ivory"> до 150 гостей</b> — только при полном выкупе территории и использовании
              open-air зоны / террасы / временного шатра.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {FORMATS.map((f) => (
              <span key={f} className="text-[12px] tracking-[0.12em] uppercase border border-border px-4 py-2 text-foreground/85">
                {f}
              </span>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          onSubmit={onSubmit}
          className="lg:col-span-6 bg-charcoal border border-border p-8 md:p-10"
        >
          <h3 className="font-display text-3xl mb-2">Запросить КП</h3>
          <p className="text-sm text-foreground/65 mb-8">
            Расскажите о формате — мы пришлём расчёт и варианты.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Имя" required />
            <Field name="company" label="Компания" required />
            <Field name="phone" label="Телефон" required type="tel" />
            <Field name="email" label="Email" required type="email" />
            <div className="sm:col-span-2">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-mist mb-2">Формат события</label>
              <select
                name="format"
                required
                defaultValue=""
                className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm text-ivory"
              >
                <option value="" disabled>Выберите формат</option>
                {FORMATS.map((f) => (
                  <option key={f} value={f} className="bg-charcoal">{f}</option>
                ))}
              </select>
            </div>
            <Field name="dates" label="Даты" />
            <Field name="guests" label="Количество гостей" />
            <div className="sm:col-span-2">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-mist mb-2">Комментарий</label>
              <textarea
                name="comment"
                rows={3}
                className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm text-ivory resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full inline-flex justify-center items-center px-7 py-4 bg-gold text-forest text-sm tracking-wide hover:bg-ivory transition-colors duration-500 disabled:opacity-60"
          >
            {submitting ? "Отправляем…" : "Запросить коммерческое предложение"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.2em] uppercase text-mist mb-2">
        {label}{required && <span className="text-gold"> ·</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm text-ivory"
      />
    </div>
  );
}
