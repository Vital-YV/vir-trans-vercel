import { DeliveryRequestForm } from '../DeliveryRequest'
import type { Metadata } from 'next'
import Link from 'next/link'
import { publicMetadata } from '../site'

export const metadata: Metadata = publicMetadata({
  title: 'Клиентам — как мы организуем перевозку | Вир-Транс',
  description: 'Подбор перевозчика, проверка, сопровождение и документы. Один контакт Вир-Транс ведёт задачу от исходных условий до завершения перевозки.',
  path: '/forClients',
})

export default function ForClients() {
  return <main>
    <section className="bg-brand-background" aria-labelledby="clients-title">
      <div className="content-container py-14 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">КЛИЕНТАМ</p>
          <h1 id="clients-title" className="mt-4 max-w-3xl text-[2.2rem] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary sm:text-[clamp(3.6rem,8vw,4.5rem)] xl:text-[clamp(3.9rem,5vw,4.6rem)]">Один <span className="text-brand-accent">контакт</span> на весь рейс</h1>
          <div className="mt-7 max-w-2xl space-y-4 text-lg leading-[1.5] text-[var(--color-text-secondary-content)] sm:text-xl">
            <p>От согласования условий до выгрузки и документов у вас один ответственный сотрудник. Он контролирует весь ход рейса и остаётся на связи.</p>
            <p>Изменилось время загрузки, появились новые условия или возник вопрос в пути? Вам не придётся выяснять, кто этим занимается, — есть к кому обратиться.</p>
          </div>
          <a href="#client-contact" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] primary-cta bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">Обсудить задачу</a>
        </div>
      </div>
    </section>

    <section id="responsibilities-title" className="bg-[#eee9e1]" aria-labelledby="insurance-title">
      <div className="content-container grid gap-5 py-10 sm:py-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">ОТВЕТСТВЕННОСТЬ</p>
          <h2 id="insurance-title" className="mt-4 max-w-md text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-brand-primary">Наша ответственность подкреплена <span className="text-brand-accent">страхованием</span></h2>
        </div>
        <p className="min-w-0 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary-content)] lg:self-center">Страховая сумма — <span className="whitespace-nowrap font-semibold text-brand-accent">20 млн ₽</span>. Для грузов повышенной стоимости заранее обсуждаем условия перевозки и дополнительную страховую защиту.</p>
      </div>
    </section>

    <section className="bg-brand-background" aria-labelledby="etrn-title">
      <div className="content-container grid gap-5 py-10 sm:py-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-secondary">ЭЛЕКТРОННЫЕ ДОКУМЕНТЫ</p>
          <h2 id="etrn-title" className="mt-4 max-w-md text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-brand-primary"><span className="text-brand-accent">ЭТрН?</span> Поможем разобраться.</h2>
        </div>
        <div className="min-w-0 max-w-xl lg:self-center">
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Переход на электронные транспортные накладные вызывает вопросы? Поможем согласовать порядок оформления с участниками перевозки и разобраться с документами по рейсу.</p>
          <Link href="/etrn" className="mt-4 inline-block text-base font-semibold text-brand-primary underline decoration-brand-accent underline-offset-4 hover:text-brand-accent">Подробнее об ЭТрН →</Link>
        </div>
      </div>
    </section>

    <section id="client-contact" className="bg-brand-background" aria-labelledby="contact-title">
      <div className="content-container grid gap-10 border-t border-brand-border py-12 sm:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">НАЧАТЬ РАБОТУ</p>
          <h2 id="contact-title" className="mt-4 max-w-xl text-[clamp(2.4rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Расскажите, что нужно <span className="text-brand-accent">перевезти</span></h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Маршрут, груз и примерные сроки — для первого разговора этого достаточно. Остальное уточним вместе.</p>
        </div>
        <div className="min-w-0 border-t-2 border-brand-accent pt-7 lg:pt-9"><DeliveryRequestForm variant="inline" /></div>
      </div>
    </section>
  </main>
}
