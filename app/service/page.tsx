import { DeliveryRequestForm } from '../DeliveryRequest'
import type { Metadata } from 'next'
import { publicMetadata } from '../site'

export const metadata: Metadata = publicMetadata({
  title: 'Перевозки под задачу — Вир-Транс',
  description: 'Организация автомобильных перевозок по России: регулярные загрузки, наливные грузы и задачи с особыми условиями. Подбираем транспорт под груз и маршрут.',
  path: '/service',
})

const directions = [
  ['Регулярные перевозки', 'Для постоянных загрузок и повторяющихся маршрутов.'],
  ['Наливные грузы', 'Когда тип транспорта и условия перевозки требуют отдельного подбора.'],
  ['Задачи с особыми условиями', 'Когда маршрут, транспорт или оформление требуют отдельной проработки.'],
]

export default function Service() {
  return <main>
    <section className="overflow-visible bg-brand-background lg:overflow-hidden" aria-labelledby="service-title"><div className="content-container grid min-w-0 grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(25rem,0.8fr)] lg:items-center lg:gap-20 lg:py-28"><div className="min-w-0 max-w-2xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">УСЛУГИ</p><h1 id="service-title" className="mt-4 max-w-full text-[clamp(2.4rem,10vw,3rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary sm:text-[clamp(3rem,6vw,5.8rem)]">Перевозки<br />под задачу</h1><p className="mt-7 max-w-xl break-words text-lg leading-[1.5] text-brand-primary sm:text-xl">Подбираем машину под груз, маршрут и условия — не наоборот.</p><a href="#service-contact" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">Обсудить перевозку</a></div><div className="min-w-0 w-full max-w-full"><img src="/service/service-hero-scheme.png" alt="Разные типы грузов и подобранный для них автомобильный транспорт" className="block h-auto w-full min-w-0 max-w-full object-contain" /></div></div></section>
    <section className="bg-[#eee9e1]" aria-labelledby="directions-title"><div className="content-container section-spacing"><div className="max-w-2xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-secondary">НАПРАВЛЕНИЯ</p><h2 id="directions-title" className="mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Три типовые задачи</h2></div><div className="mt-14 grid border-t border-brand-border lg:grid-cols-3">{directions.map(([title, description], index) => <article key={title} className={`min-w-0 border-b border-brand-border py-8 lg:border-b-0 lg:px-8 lg:py-0 ${index < directions.length - 1 ? 'lg:border-r' : ''} ${index === 0 ? 'lg:pl-0' : ''} ${index === directions.length - 1 ? 'lg:pr-0' : ''}`}><span className="mb-6 block h-1 w-10 bg-brand-accent" /><h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-brand-primary sm:text-2xl">{title}</h3><p className="mt-4 max-w-sm text-base leading-7 text-[var(--color-text-secondary-content)]">{description}</p></article>)}</div><p className="mt-10 text-lg font-bold tracking-[-0.04em] text-brand-primary">Подбираем → Проверяем → Сопровождаем</p></div></section>
    <section id="service-contact" className="bg-brand-background" aria-labelledby="service-contact-title"><div className="content-container section-spacing grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"><div><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">НАЧАТЬ РАЗГОВОР</p><h2 id="service-contact-title" className="mt-4 max-w-xl text-[clamp(2.4rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Есть перевозка? Разберём задачу.</h2><p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Опишите задачу в нескольких словах — остальное уточнит менеджер.</p></div><div className="border-t-2 border-brand-accent pt-7 lg:pt-9"><DeliveryRequestForm variant="inline" /></div></div></section>
  </main>
}
