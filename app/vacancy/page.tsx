import type { Metadata } from 'next'
import Image from 'next/image'
import { publicMetadata } from '../site'

export const metadata: Metadata = publicMetadata({
  title: 'Работа логистом в Вир-Транс — вакансии',
  description: 'Вакансия логиста в Вир-Транс: работа со ставками, поиск перевозчиков и самостоятельное сопровождение автомобильных перевозок.',
  path: '/vacancy',
})

const offer = [
  'Офис в Самаре, для опытных логистов — возможность работать удалённо.',
  'Самостоятельность и возможность влиять на свой заработок.',
  'Небольшую команду, рабочие инструменты и поддержку коллег.',
  'Оплату с премированием по результатам работы.',
]

export default function Vacancy() {
  return <main>
    <section className="bg-brand-background" aria-labelledby="vacancy-title">
      <div className="content-container grid min-w-0 gap-7 py-10 sm:gap-9 sm:py-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:py-16">
        <div className="min-w-0 max-w-4xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">ВАКАНСИИ</p>
          <p className="mt-5 inline-flex border border-brand-accent px-3 py-1.5 text-xs font-extrabold tracking-[0.1em] text-brand-primary">Открыта вакансия — логист</p>
          <h1 id="vacancy-title" className="mt-5 max-w-full text-[2.25rem] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary sm:text-[clamp(3.6rem,8vw,4.6rem)] xl:text-[clamp(3.9rem,5vw,4.8rem)]">Ищем логиста, который <span className="text-brand-accent">чувствует рынок</span></h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-[1.5] text-[var(--color-text-secondary-content)] sm:text-xl">
            <p>Любите находить выгодные решения, умеете договариваться и быстро ориентироваться в меняющейся ситуации? Возможно, нам по пути.</p>

          </div>
          <p className="mt-5 max-w-2xl border-l-2 border-brand-accent pl-4 text-base font-semibold leading-7 text-brand-primary">Самара — офис. Опытным логистам — удалённо из любого города России.</p>
          <a href="#vacancy-contact" className="mt-7 inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] primary-cta bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">Откликнуться</a>
        </div>
        <Image
          src="/vacancy/vir-trans-vacancy-team.webp"
          alt="Два сотрудника ВИР-ТРАНС в офисе с видом на Волгу; на столе модель грузовика с логотипом компании"
          width={1100}
          height={825}
          priority
          sizes="(min-width: 1280px) 432px, (min-width: 1024px) 37vw, 288px"
          className="mx-auto block h-auto w-full max-w-[288px] rounded-[var(--radius-sm)] lg:mx-0 lg:max-w-none"
        />
      </div>
    </section>

    <section className="bg-[#EEEAE2] text-brand-primary" aria-labelledby="game-title">
      <div className="content-container py-10 sm:py-12">
        <div className="max-w-3xl">
          <h2 id="game-title" className="text-[clamp(2.3rem,4.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Суть <span className="text-brand-accent">работы</span></h2>
          <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.04em] text-brand-primary sm:text-2xl">Сначала ставка. Потом машина.</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Клиенту нужна перевозка — и нередко решение требуется быстро. Нужно оценить реальные ставки рынка, предложить конкурентную цену, а после получения заказа подобрать перевозчика и довести рейс до завершения.</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Здесь важно не просто выиграть заказ, а выполнить его на согласованных условиях и с разумной экономикой.</p>
        </div>
      </div>
    </section>

    <section id="work-title" className="bg-brand-surface" aria-labelledby="candidate-title">
      <div className="content-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="min-w-0 max-w-xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-secondary">КОГО МЫ ИЩЕМ</p>
          <h2 id="candidate-title" className="mt-4 text-[clamp(2.3rem,4.4vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Кому будет интересно</h2>
        </div>
        <div className="min-w-0">
          <p className="text-lg leading-relaxed text-brand-primary">Тем, кто быстро соображает, любит переговоры, умеет искать выгодные решения и самостоятельно отвечать за результат.</p>
          <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary-content)]">Не обязательно знать все ставки наизусть. Важнее понимать рынок и уметь быстро находить нужную информацию.</p>
          <div className="mt-7 border-l-2 border-brand-accent pl-5">
            <h3 className="text-xl font-bold tracking-[-0.04em] text-brand-primary">А если опыта пока нет?</h3>
            <p className="mt-3 text-base leading-7 text-[var(--color-text-secondary-content)]">Тоже откликайтесь! Если прочитали описание работы и подумали «Это могло бы быть моим делом» — будем рады знакомству. Иногда способности и желание разобраться важнее строчки в резюме.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-brand-background" aria-labelledby="offer-title">
      <div className="content-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="min-w-0 max-w-xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">УСЛОВИЯ</p>
          <h2 id="offer-title" className="mt-4 text-[clamp(2.3rem,4.4vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">Что предлагаем</h2>
        </div>
        <div className="min-w-0">
          <ul className="border-t border-brand-border">
            {offer.map((item, index) => <li key={item} className={`border-b border-brand-border py-4 text-base leading-7 ${index === 0 ? 'font-semibold text-brand-primary' : 'text-[var(--color-text-secondary-content)]'}`}>{item}</li>)}
          </ul>
          <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary-content)]">Конкретные условия обсудим с учётом опыта.</p>
        </div>
      </div>
    </section>

    <section id="vacancy-contact" className="bg-[#EEEAE2] text-brand-primary" aria-labelledby="vacancy-contact-title">
      <div className="content-container grid gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">ОТКЛИКНУТЬСЯ</p>
          <h2 id="vacancy-contact-title" className="mt-4 text-[clamp(2.4rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em]">Узнали себя?</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary-content)]">Напишите пару слов о своём опыте или о том, почему вам интересна такая работа. Резюме приветствуется, но необязательно.</p>
        </div>
        <div className="min-w-0 border-t border-brand-border pt-7">
          <a href="mailto:v-t@vir-trans.ru?subject=Вакансия%20логиста" className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] primary-cta bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">Обсудить вакансию</a>
          <div className="mt-9 grid gap-5 text-base sm:grid-cols-2">
            <a href="mailto:v-t@vir-trans.ru" className="border-b border-brand-border pb-3 font-semibold transition-colors hover:text-brand-accent">v-t@vir-trans.ru</a>
            <a href="tel:+78004440097" className="border-b border-brand-border pb-3 font-semibold transition-colors hover:text-brand-accent">+7 (800) 444-00-97, доб. 704</a>
          </div>
        </div>
      </div>
    </section>
  </main>
}
