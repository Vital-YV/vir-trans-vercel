import { DeliveryRequestForm } from '../DeliveryRequest'
import type { Metadata } from 'next'
import { publicMetadata } from '../site'

export const metadata: Metadata = publicMetadata({
  title: 'Клиентам — как мы организуем перевозку | Вир-Транс',
  description: 'Подбор перевозчика, проверка, сопровождение и документы. Один контакт Вир-Транс ведёт задачу от исходных условий до завершения перевозки.',
  path: '/forClients',
})

const responsibilities = [
  ['01', 'Подбор перевозчика', 'Подбираем исполнителя под задачу и условия перевозки.'],
  ['02', 'Проверка', 'Проверяем перевозчика, водителя и транспорт до рейса.'],
  ['03', 'Сопровождение', 'Остаёмся на связи и контролируем ключевые этапы рейса.'],
  ['04', 'Документы', 'Сопровождаем работу с документами по перевозке.'],
]

function ProcessDiagram() {
  const nodes = ['Задача', 'Проверка', 'Перевозка', 'Документы']
  return <div className="relative mx-auto w-full min-w-0 max-w-full border border-brand-border bg-brand-surface p-5 sm:max-w-[36rem] sm:p-7 xl:max-w-none" aria-label="Схема процесса работы"><div className="absolute left-5 top-5 h-2 w-2 bg-brand-accent sm:left-7 sm:top-7" /><p className="ml-5 text-xs font-extrabold tracking-[0.12em] text-brand-secondary sm:ml-6">РАБОЧАЯ СХЕМА</p><div className="relative mt-7 grid min-w-0 grid-cols-2 gap-x-6 gap-y-5 sm:mt-9 sm:gap-x-9 sm:gap-y-7">{nodes.map((node, index) => <div key={node} className="relative min-w-0"><div className="border border-brand-primary bg-brand-surface px-2 py-3 text-center text-sm font-bold tracking-[-0.04em] text-brand-primary sm:px-3 sm:py-4 sm:text-base"><span className="mb-1 block text-[10px] font-extrabold tracking-[0.12em] text-brand-accent">0{index + 1}</span>{node}</div></div>)}</div><p className="mt-6 border-t border-brand-border pt-4 text-sm leading-6 text-[var(--color-text-secondary-content)]">Один ответственный контакт ведёт задачу от вводных до документов.</p></div>
}

export default function ForClients() {
  return <main>
    <section className="bg-brand-background" aria-labelledby="clients-title"><div className="content-container grid min-w-0 grid-cols-1 gap-12 py-16 sm:py-20 xl:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)] xl:items-center xl:gap-14 xl:py-28"><div className="min-w-0 w-full max-w-3xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">КЛИЕНТАМ</p><h1 id="clients-title" className="mt-4 max-w-full text-[2.2rem] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary sm:text-[clamp(3.6rem,8vw,4.5rem)] xl:text-[clamp(3.9rem,5vw,4.6rem)]">Один контакт на весь рейс</h1><p className="mt-7 max-w-xl text-lg leading-[1.5] text-[var(--color-text-secondary-content)] sm:text-xl">Подбор перевозчика, проверка, контроль и документы — на нашей стороне.</p><a href="#client-contact" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">Обсудить задачу</a></div><div className="min-w-0 w-full max-w-full"><ProcessDiagram /></div></div></section>
    <section className="bg-brand-graphite text-white" aria-labelledby="responsibilities-title"><div className="content-container section-spacing"><div className="max-w-2xl"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">ПРОЦЕСС РАБОТЫ</p><h2 id="responsibilities-title" className="mt-4 text-[clamp(2.3rem,4.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em]">Что мы берём на себя</h2></div><div className="mt-14 border-t border-white/20">{responsibilities.map(([number, title, text]) => <article key={number} className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[4rem_minmax(12rem,0.78fr)_minmax(0,1.22fr)] sm:gap-8 sm:py-9"><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">{number}</p><h3 className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">{title}</h3><p className="max-w-xl text-base leading-7 text-[var(--color-text-secondary-on-graphite)] sm:text-lg sm:leading-relaxed">{text}</p></article>)}</div></div></section>
    <section id="client-contact" className="bg-brand-background" aria-labelledby="contact-title"><div className="content-container section-spacing grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"><div><p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">НАЧАТЬ РАБОТУ</p><h2 id="contact-title" className="mt-4 max-w-xl text-[clamp(2.4rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Есть маршрут или задача? Обсудим условия.</h2><p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Опишите задачу в нескольких словах — уточним детали и предложим рабочий вариант.</p></div><div className="border-t-2 border-brand-accent pt-7 lg:pt-9"><DeliveryRequestForm variant="inline" /></div></div></section>
  </main>
}
