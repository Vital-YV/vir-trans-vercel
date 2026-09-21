const regions = ['ЯНАО', 'ХМАО', 'Норильск', 'Бодайбо', 'Якутия', 'Воркута']

export default function ExperienceRange() {
  return (
    <section id="опыт" className="bg-brand-background" aria-labelledby="experience-range-title">
      <div className="content-container experience-section-spacing">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">ПРАКТИКА</p>
            <h2 id="experience-range-title" className="mt-4 max-w-md text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary">
              Где у нас уже есть опыт
            </h2>
          </div>

          <div className="border-l-2 border-brand-accent pl-6 sm:pl-8">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-brand-primary sm:text-3xl">
              Сложная география
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed lg:text-lg">
              Удалённые направления, где особенно важны предварительная проработка маршрута и внимание к условиям перевозки.
            </p>
          </div>
        </div>

        <div className="mt-12 border-y border-brand-border py-8 sm:mt-16 sm:py-10">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[clamp(1.8rem,4vw,4.75rem)] font-extrabold leading-none tracking-[-0.06em] text-brand-primary">
            {regions.map((region, index) => (
              <span key={region} className={index === 0 ? 'text-brand-accent' : ''}>{region}</span>
            ))}
            <span className="text-[var(--color-text-secondary-content)]">и другие</span>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] md:gap-16">
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">02</p>
            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-brand-primary sm:text-3xl">
              Крупногабаритные и тяжеловесные грузы
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed lg:text-lg">
              Перевозки, где маршрут, транспорт и условия требуют отдельной проработки.
            </p>
          </div>

          <div className="border-t border-brand-border pt-6 md:mt-1">
            <p className="text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed">
              Также есть опыт работы с наливными и опасными грузами.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
