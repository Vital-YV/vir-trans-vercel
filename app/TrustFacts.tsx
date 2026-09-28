const facts = [
  {
    label: 'ОПЫТ',
    titleBefore: 'С ',
    accent: '2008',
    titleAfter: ' года',
    description: 'В транспортной логистике.',
    featured: true,
  },
  {
    label: 'СТРАХОВАЯ ЗАЩИТА',
    titleBefore: 'Ответственность застрахована минимум на ',
    accent: '8 млн ₽',
    description: 'Росгосстрах · Ингосстрах · Согласие · ПАРИ',
  },
  {
    label: 'ПРОВЕРКА ДО РЕЙСА',
    titleBefore: 'Проверяем до рейса',
    description: 'Перевозчика, водителя и транспорт до передачи груза.',
  },
]

export default function TrustFacts() {
  return (
    <section id="о-компании" className="bg-brand-background" aria-labelledby="trust-facts-title">
      <div className="content-container main-section-spacing">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">ОСНОВАНИЯ ДЛЯ ДОВЕРИЯ</p>
          <h2 id="trust-facts-title" className="mt-4 text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary">
            О Вир-Транс — в нескольких фактах
          </h2>
        </div>

        <div className="mt-12 grid border-y border-[#e2dcd3] md:mt-16 md:grid-cols-2">
          {facts.map((fact, index) => (
            <article key={fact.label} className={`border-[#e2dcd3] px-0 py-8 sm:py-10 md:px-10 md:py-10 ${index % 2 === 0 ? 'md:border-r' : ''} ${index > 1 ? 'border-t' : ''}`}>
              <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">{fact.label}</p>
              <h3 className={`mt-6 font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary ${fact.featured ? 'text-[clamp(3.6rem,6vw,6.5rem)]' : 'max-w-xl text-[clamp(1.9rem,3vw,3.25rem)]'}`}>
                {fact.titleBefore}{fact.accent && <span className="text-brand-accent">{fact.accent}</span>}{fact.titleAfter}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed lg:text-lg">{fact.description}</p>
            </article>
          ))}

          <article className="border-t border-[#e2dcd3] px-0 py-8 sm:py-10 md:border-l md:px-10 md:py-10">
            <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">НЕЗАВИСИМОЕ ПОДТВЕРЖДЕНИЕ</p>
            <h3 className="mt-6 text-[clamp(1.9rem,3vw,3.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary">
              Открытая репутация
            </h3>
            <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed lg:text-lg">Паспорт Вир-Транс в ATI.SU, код участника 865279.</p>
            <a
              href="https://ati.su/firms/865279/info"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 border-b border-brand-accent pb-1 text-base font-semibold text-brand-primary transition-colors hover:text-brand-accent"
            >
              Проверить профиль ATI.SU <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
