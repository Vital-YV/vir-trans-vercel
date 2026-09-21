const steps = [
  {
    title: 'Разбираемся',
    description: 'Понимаем груз, маршрут, сроки и важные условия перевозки.',
  },
  {
    title: 'Подбираем',
    description: 'Ищем перевозчика и транспорт именно под конкретную задачу.',
  },
  {
    title: 'Проверяем',
    description: 'До рейса проверяем перевозчика, водителя и транспорт.',
  },
  {
    title: 'Сопровождаем',
    description: 'Остаёмся на связи и контролируем перевозку до завершения.',
  },
]

export default function WorkProcess() {
  return (
    <section className="bg-brand-graphite text-white" aria-labelledby="work-process-title">
      <div className="content-container main-section-spacing">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-white/55">ПОДХОД К РАБОТЕ</p>
            <h2 id="work-process-title" className="mt-4 text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white">
              Как мы работаем
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/65 md:text-right md:leading-relaxed">
            Заявка проходит понятный рабочий маршрут — от первой детали до завершения перевозки.
          </p>
        </div>

        <div className="relative mt-14 md:mt-20">
          <div className="absolute bottom-3 left-[7px] top-3 w-px bg-white/20 md:hidden" aria-hidden="true" />
          <div className="absolute inset-x-0 top-3 hidden h-px bg-white/20 lg:block" aria-hidden="true" />
          <div className="grid gap-9 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <article key={step.title} className="relative pl-10 md:pl-0 md:odd:after:absolute md:odd:after:left-4 md:odd:after:right-[-2.5rem] md:odd:after:top-[7px] md:odd:after:h-px md:odd:after:bg-white/20 lg:after:hidden">
                <div className="relative z-10 flex items-center gap-3 md:flex-col md:items-start md:gap-5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-brand-graphite bg-brand-accent" aria-hidden="true" />
                  <span className="text-sm font-bold leading-none tracking-[0.12em] text-white/50 md:text-xs">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-white lg:text-[1.75rem]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-xs text-base leading-7 text-white/65 md:leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
