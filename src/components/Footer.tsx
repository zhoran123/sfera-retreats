export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold/60">
              <span className="absolute inset-1 rounded-full border border-gold/30" />
              <span className="absolute inset-2 rounded-full bg-gold/20" />
            </span>
            <span className="font-display text-2xl">Sfera / Сфера</span>
          </div>
          <p className="mt-5 text-sm text-foreground/65 leading-relaxed max-w-xs">
            Сфера восстановления и осмысленных событий для людей и команд.
          </p>
        </div>

        <Col title="Гостям" items={[
          { href: "#scenarios", label: "Сценарии" },
          { href: "#accommodation", label: "Домики" },
          { href: "#wellness", label: "Wellness" },
          { href: "#events", label: "События" },
          { href: "#booking", label: "Бронирование" },
        ]} />

        <Col title="Компаниям" items={[
          { href: "#corporate", label: "Корпоративные выезды" },
          { href: "#corporate", label: "Ретриты" },
          { href: "#corporate", label: "Запросить КП" },
        ]} />

        <div>
          <p className="eyebrow mb-5">Контакты</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><a href="tel:+74950000000" className="hover:text-gold transition-colors">+7 (495) 000-00-00</a></li>
            <li><a href="mailto:hello@sfera.ru" className="hover:text-gold transition-colors">hello@sfera.ru</a></li>
            <li><a href="https://t.me/" className="hover:text-gold transition-colors">Telegram</a></li>
            <li><a href="https://vk.com/" className="hover:text-gold transition-colors">VK</a></li>
            <li><a href="https://instagram.com/" className="hover:text-gold transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-wrap gap-4 justify-between text-[12px] text-mist">
          <p>© Sfera, 2026. Сфера восстановления и осмысленных событий.</p>
          <p>Глэмпинг-резорт у реки Дубна · 25 га</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-5">{title}</p>
      <ul className="space-y-3 text-sm text-foreground/80">
        {items.map((i) => (
          <li key={i.label}><a href={i.href} className="hover:text-gold transition-colors">{i.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
