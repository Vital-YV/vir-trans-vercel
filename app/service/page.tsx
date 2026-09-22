import { DeliveryRequestForm } from '../DeliveryRequest'

const foundation = [
  ['01', 'Регулярные загрузки', 'Выстраиваем понятную работу для повторяющихся маршрутов и плановых отправок.'],
  ['02', 'Транспорт под груз', 'Подбираем транспорт по параметрам груза и условиям конкретной перевозки.'],
  ['03', 'Проверка до рейса', 'Проверяем перевозчика, водителя и транспорт до того, как груз выйдет в путь.'],
  ['04', 'Сопровождение', 'Остаёмся на связи и ведём рейс до завершения перевозки.'],
]

const specialCases = [
  ['Крупногабаритные и тяжеловесные грузы', 'Есть опыт перевозок, где требуется отдельная проработка маршрута, транспорта и условий.'],
  ['Наливные и опасные грузы', 'Берём в работу задачи, для которых важны специальные условия перевозки и предварительное согласование деталей.'],
  ['Мультимодальные перевозки', 'Подключаем дополнительную компетенцию, когда автомобильный маршрут нужно дополнить другим способом доставки.'],
]

const startDetails = ['Маршрут', 'Груз', 'Дата или период', 'Особенности и ограничения']

export default function Service() {
  return (
    <main>
      <section className="overflow-visible bg-brand-background lg:overflow-hidden" aria-labelledby="service-title">
        <div className="content-container grid min-w-0 grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(25rem,0.8fr)] lg:items-center lg:gap-20 lg:py-28">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">УСЛУГИ</p>
            <h1 id="service-title" className="mt-4 max-w-full break-normal text-[clamp(2.4rem,10vw,3rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary sm:text-[clamp(3rem,6vw,5.8rem)]">Перевозки<br />под задачу</h1>
            <p className="mt-7 w-full max-w-xl overflow-visible break-words text-lg leading-[1.5] text-brand-primary sm:text-xl">Автомобильные перевозки по России — от регулярных загрузок до задач с дополнительными условиями.</p>
            <a href="#service-contact" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">Обсудить перевозку</a>
          </div>
          <div className="min-w-0 w-full max-w-full overflow-visible">
            <img src="/service/service-hero-scheme.png" alt="Разные типы грузов и подобранный для них автомобильный транспорт" className="block h-auto w-full min-w-0 max-w-full overflow-visible object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-brand-graphite text-white" aria-labelledby="foundation-title"><div className="content-container section-spacing"><div className="max-w-3xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">ОСНОВНОЕ НАПРАВЛЕНИЕ</p><h2 id="foundation-title" className="mt-4 text-[clamp(2.3rem,4.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em]">Автомобильные перевозки — основа нашей работы</h2></div><div className="mt-14 border-t border-white/20">{foundation.map(([number, title, description]) => <article key={number} className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[4rem_minmax(11rem,0.75fr)_minmax(0,1.25fr)] sm:gap-8 sm:py-9"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">{number}</p><h3 className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">{title}</h3><p className="max-w-xl text-base leading-7 text-[var(--color-text-secondary-on-graphite)] sm:text-lg sm:leading-relaxed">{description}</p></article>)}</div></div></section>

      <section className="bg-[#eee9e1]" aria-labelledby="special-title"><div className="content-container section-spacing"><div className="max-w-2xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-secondary">ДОПОЛНИТЕЛЬНЫЕ КОМПЕТЕНЦИИ</p><h2 id="special-title" className="mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Когда стандартной схемы недостаточно</h2></div><div className="mt-14 grid border-t border-brand-border lg:grid-cols-3">{specialCases.map(([title, description], index) => <article key={title} className={`border-b border-brand-border py-8 lg:border-b-0 lg:px-8 lg:py-0 ${index < specialCases.length - 1 ? 'lg:border-r' : ''} ${index === 0 ? 'lg:pl-0' : ''} ${index === specialCases.length - 1 ? 'lg:pr-0' : ''}`}><span className="mb-6 block h-1 w-10 bg-brand-accent" /><h3 className="max-w-sm text-xl font-bold leading-tight tracking-[-0.04em] text-brand-primary sm:text-2xl">{title}</h3><p className="mt-4 max-w-sm text-base leading-7 text-[var(--color-text-secondary-content)]">{description}</p></article>)}</div></div></section>

      <section className="bg-brand-surface" aria-labelledby="start-title"><div className="content-container section-spacing grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20"><div className="max-w-xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-secondary">ПЕРВЫЙ РАЗГОВОР</p><h2 id="start-title" className="mt-4 text-[clamp(2.3rem,4.4vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Чтобы начать, достаточно нескольких вводных</h2><p className="mt-6 max-w-md text-base leading-7 text-[var(--color-text-secondary-content)] sm:text-lg sm:leading-relaxed">Остальное уточнит менеджер — без длинной анкеты до первого разговора.</p></div><ol className="border-t border-brand-border">{startDetails.map((detail, index) => <li key={detail} className="flex items-baseline gap-5 border-b border-brand-border py-5 sm:gap-8 sm:py-6"><span className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">0{index + 1}</span><span className="text-xl font-bold tracking-[-0.04em] text-brand-primary sm:text-2xl">{detail}</span></li>)}</ol></div></section>

      <section id="service-contact" className="bg-brand-background" aria-labelledby="service-contact-title"><div className="content-container section-spacing grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"><div><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">НАЧАТЬ РАЗГОВОР</p><h2 id="service-contact-title" className="mt-4 max-w-xl text-[clamp(2.4rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Есть перевозка? Разберём задачу.</h2><p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Опишите перевозку в нескольких словах — остальное уточнит менеджер.</p></div><div className="border-t-2 border-brand-accent pt-7 lg:pt-9"><DeliveryRequestForm variant="inline" /></div></div></section>
    </main>
  )
}
