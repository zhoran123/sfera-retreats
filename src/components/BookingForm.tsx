import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

const SCENARIOS = [
  "Для двоих",
  "С детьми",
  "Wellness",
  "Workation",
  "Корпоратив",
  "Пока не знаю",
];

const schema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80),
  phone: z.string().trim().min(6, "Укажите телефон").max(30),
  email: z.string().trim().email("Некорректный email").max(120),
  dates: z.string().trim().max(80).optional().or(z.literal("")),
  guests: z.string().trim().max(20).optional().or(z.literal("")),
  scenario: z.string().min(1, "Выберите сценарий"),
  comment: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function BookingForm() {
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
      toast.success("Спасибо. Мы свяжемся с вами и поможем собрать сценарий поездки.");
    }, 700);
  }

  return (
    <section id="booking" className="bg-forest py-28 md:py-40 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Бронирование</p>
          <h2 className="display-lg font-display text-balance">
            Соберите свой
            <br />
            <span className="italic text-gold">сценарий</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 bg-card/40 border border-gold/30 p-8"
          >
            <p className="font-display text-2xl leading-snug">
              Мы поможем выбрать домик, баню, ужин и событие под ваш ритм поездки.
            </p>
            <div className="gold-hairline my-6" />
            <p className="text-sm text-foreground/75 leading-relaxed">
              Ответим в течение рабочего дня, предложим варианты дат, расскажем
              про сезонные программы и подберём оптимальный формат под вас.
            </p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-charcoal border border-border p-8 md:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Имя" required />
            <Field name="phone" label="Телефон" required type="tel" />
            <Field name="email" label="Email" required type="email" />
            <Field name="dates" label="Даты" />
            <Field name="guests" label="Количество гостей" />
            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-mist mb-2">Сценарий</label>
              <select
                name="scenario"
                required
                defaultValue=""
                className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm text-ivory"
              >
                <option value="" disabled>Выберите сценарий</option>
                {SCENARIOS.map((s) => (
                  <option key={s} value={s} className="bg-charcoal">{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-mist mb-2">Комментарий</label>
              <textarea
                name="comment"
                rows={4}
                className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm text-ivory resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full inline-flex justify-center items-center px-7 py-4 bg-gold text-forest text-sm tracking-wide hover:bg-ivory transition-colors duration-500 disabled:opacity-60"
          >
            {submitting ? "Отправляем…" : "Отправить заявку"}
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
