const situations = [
  {
    title: 'Нужны регулярные перевозки',
    description: 'Постоянные загрузки и направления, где важна стабильная организация работы.',
  },
  {
    title: 'Есть дополнительные условия',
    description: 'Особенности груза, транспорта, погрузки, маршрута или оформления требуют отдельного внимания.',
  },
  {
    title: 'Нет готовой схемы',
    description: 'Разбираемся в исходных условиях, прорабатываем варианты и предлагаем рабочее решение.',
  },
]

export default function InquirySituations() {
  return (
    <section id="перевозки" className="bg-brand-background" aria-labelledby="inquiry-situations-title">
      <div className="content-container main-section-spacing">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">ВИР-ТРАНС</p>
          <h2 id="inquiry-situations-title" className="mt-4 text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary">
            С чем к нам обращаются
          </h2>
        </div>

        <div className="mt-12 grid divide-y divide-brand-border md:mt-16 md:grid-cols-3 md:divide-x md:divide-y-0">
          {situations.map((situation, index) => (
            <article key={situation.title} className="py-9 first:pt-0 md:px-9 md:py-0 md:first:pl-0 md:last:pr-0">
              <div className="flex items-center gap-3 text-xs font-bold tracking-[0.1em] text-[var(--color-text-secondary-content)]">
                <span className="h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-[1.08] tracking-[-0.04em] text-brand-primary lg:text-[1.8rem]">
                {situation.title}
              </h3>
              <p className="mt-5 max-w-sm text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed lg:text-[1.05rem]">
                {situation.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
